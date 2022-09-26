var fs = require('fs');
// var gphoto2 = require('gphoto2');
// var GPhoto = new gphoto2.GPhoto2();
const pathUtil = require('path')
const config = require('nconf')
const express = require('express')
const cors = require('cors')
const http = require('http')
const app = express()

const corsOptions = {
  origin: '*',
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))


const httpServer = http.createServer(app)
const port = 3000
const camera = require('./camera.js')
const gallery = require('./gallery.js')
const path = require("path");
const { Server: socketServer } = require('socket.io')
const ioServer = new socketServer(httpServer, {
  cors: {
    origin: ["http://localhost","http://localhost:8080","http://192.168.1.1:3000", "http://192.168.42.157:3000", '*'],
    methods: ["GET", "POST"]
  }
})

const configFile = 'config/default.json'


config.file({file: configFile})

camera.setup(config)


//
// const bc = new BroadcastChannel('photoboothv4.00.00')
// const sendServerBroadcast = () =>{
//   setTimeout( () => {
//     try {
//       console.log("Send my position to broadcast")
//       bc.postMessage("this is a test message.")
//     }catch(exp) {
//       console.error(exp)
//     }
//     sendServerBroadcast()
//   }, 5000)
// }
// sendServerBroadcast()



let cameraAliveCheck = true
let cameraFound = false
cameraAlive =  async () => {
  if(!cameraAliveCheck) return
  const cameraSetup = await camera.setup(config)
  console.log(cameraSetup)
  if(cameraSetup.detectError) {
    ioServer.emit('noCamera', {message: cameraSetup.detectError})
    cameraFound = false
    console.log("broadcast noCamera")
  }else
  if(cameraSetup.capturetargetError) {
    ioServer.emit('cameraError', {message: cameraSetup.capturetargetError})
    cameraFound = false
    console.log("broadcast cameraError")
  }else
  if(cameraSetup.detectOutput.length <= 0) {
    ioServer.emit('noCamera')
    cameraFound = false
    console.log("broadcast noCamera")
  }else {
    cameraFound = true
    ioServer.emit('cameraOK')
    console.log("broadcast cameraOK")
  }
}
let cameraAliveInterval = setInterval(cameraAlive, 5000)
cameraAlive()

ioServer.on('connection', (socket) => {

  console.log('a user connected', socket)
  socket.emit('clientStatus', {type: "success", message: 'Connected to Photobooth'})

  socket.on('config', (arg) => {
    for(const [configKey, configValue] of Object.entries(arg)) {
      console.log('config set', {configKey, configValue})
      config.set(configKey, configValue)
    }
    saveConfig()
  })

  socket.on('requestSettings', (arg) => {
    console.log("settings requested")
    socket.emit('receiveSettings', config.get())
  })
  socket.on('sendSettings', (arg) => {
    console.log("settings sent", {arg})
    try {
      for (const conf of Object.entries(arg)) {
        config.set(conf[0], conf[1])
      }
      saveConfig()
      socket.emit('savedSettings', {type: 'positive', text:'Einstellungen gespeichert'})
    }catch(error) {
      socket.emit('savedSettings', {type: 'negative', text: 'error'})
    }
  })

  socket.on('requestGallery', async (arg) => {
    console.log("gallery list requested")
    socket.emit('receiveGallery', {list: await gallery.list()})
  })

  socket.on('requestGalleryImages', async() => {
    const galleryImages = await gallery.getCurrentGalleryImages()
    socket.emit('receiveGalleryImages', galleryImages)
  })

  socket.on('addGallery', async (newGallery) =>  {
    await gallery.setGallery(newGallery)
    socket.emit('addGallerySuccess')
  })

  socket.on('removeGallery', async (oldGallery) =>  {
    const deleteComplete = await gallery.removeGallery(oldGallery)
    if(deleteComplete) {
      socket.emit('removeGallerySuccess')
    }else{
      socket.emit('removeGalleryFailed')
    }
  })

  let triggerInProgress = false
  socket.on('trigger', async (arg) => {
    if(!cameraFound) {
      socket.emit('clientStatus', {type: "error", message: 'Auslösen ohne Kamera nicht möglich'})
      ioServer.emit('setClientMode')
      return false
    }
    if(triggerInProgress) {
      console.log("too many trigger clicked")
      socket.emit('clientStatus', {type: "warning", message: 'Mehrfaches betätigen des Auslösers nicht nötig!'})
      return false
    }
    cameraAliveCheck = false
    triggerInProgress = true
    console.log('a client send trigger event')
    console.log('send show countdown to everyone')
    ioServer.emit('countdown', {countdown: config.get('camera:countdown')})
    const countdownTime= parseInt(config.get('camera:countdown') * 1000)
    const countdownTimeWithDelay = (parseInt(config.get('camera:countdown')) * 1000) + parseInt(config.get('camera:triggerDelay'))
    console.log('Wait Milliseconds before trigger:', countdownTimeWithDelay)
    setTimeout(async () => {
      console.log("cheese")
      ioServer.emit('pictureTaken')
      const {pictureTaken, picture} = await camera.takePicture()
      const path = require('path')
      const options = {
        root: pathUtil.join(__dirname)
      }
      if(pictureTaken) {
        console.log("Picture was taken!")
        camera.compressPreview(picture).then( (preview) => {
          console.log("send preview")
          ioServer.emit('preview', {imagePath: preview, path: options.root, previewTimout: config.get('camera:previewTimeout')})
          setTimeout( () => {
            ioServer.emit('setClientMode')
            triggerInProgress = false
          }, config.get('camera:previewTimeout')*1000)
        }).catch(compressError => {
          ioServer.emit('clientStatus', {type: 'error', message: 'Es gab einen Fehler beim komprimieren der Vorschau. \n'+compressError})
          ioServer.emit('setClientMode')
          triggerInProgress = false
        })
        gallery.add(picture).then(() => {ioServer.emit('gallery', {type: 'update'})})
      }else{
        socket.emit('clientStatus', {type: 'error', message: 'Es liegt ein Fehler mit der Kamera vor, bitte Fotografen kontaktieren.'})
        ioServer.emit('setClientMode')
        triggerInProgress = false
      }
    }, countdownTimeWithDelay)
    setTimeout( () => {
      console.log("end countdown / init after countdown")
      ioServer.emit('countdownEnd' )

      clearInterval(cameraAliveInterval)
      cameraAliveInterval = setInterval(cameraAlive, 5000)
      cameraAliveCheck = true
    }, countdownTime)
    //Wenn der Trigger gedrückt wird, müssen alle Clients den Befehl bekommen einen Countdown anzuzeigen: camera:countdown (s) z.B. 3, 2, 1
    //Der Countdown startet // Config => camera:countdown * 1000 (ms)
    //Die kamera bekommt bei 0 + config:camera:triggerDelay (ms) den Auslöse befehl
    //Bild wird geschossen und heruntergeladen
    //Bild wird auf config:camera:previewResolution verkleinert und an alle clients versendet
    //Bild wird parallel als thumbnail für die Gallerie abgelegt
    //Konnte das Foto nicht geschossen werden, sende "resetClient" alle clients auf ursprungszustand mit fehlermeldungs anzeige
    return true
  })

})



/**
 *
 *
 * @Todo:
 *
 * Server läuft immer auf PI
 * und nimmt Befehle entgegen:
 * - trigger
 *
 * Server sendet Infos an Clients nach Typ:
 * - Auslöser anzeigen (countdown, bild etc. ausblenden / abbrechen)
 * - bild für X Sekunden anzeigen
 * - countdown für X Sekunden anzeigen
 *
 * Server bietet Website für Clients (inkl. Backend/Server Settings)
 *
 * Server-Einstellungsmöglichkeiten:
 * - Settings Passwortschützen
 * - Gallerie passwortschützen
 * - Kameraauslöser Delay (ca. 400ms)
 * - Countdown Einstellung
 * - Bildvorschau Einstellung
 * - Gallery aufräumen funktion
 * - Gallery in einen anderen Subordner sichern
 * - Auflistung aller angeschlossenen USB Sticks
 * - Dauerübetragung auf USB Stick
 * - Einmalübertragung auf USB Stick
 * - Anzeige aller verbundenen Clients (Typ, etc)
 *
 * Einstellung der clients auf serverseite oder Clientseitig?
 *
 * Jeder Client verbindet sich mit dem Server nach verschiedenen Typen
 * Im Vergleich zur alten Version wird der Client NUR für das anzeigen von Auslöser, Countdown, Bild genutzt
 * Einzige Inputoption = Auslöser schickt "trigger" an Server
 * - Nur Auslöser
 * - Auslöser + Bildanzeige
 * - Nur Bildanzeige ( Einfache / mehrfach / Sliderview )
 * - Zur Gallerieanzeige
 *
 * Client-Einstellungen Sinnvoll?:
 * - Bildanzeige-Art ( die letzten x Fotos / nur das aktuelle)
 *
 *
 * CLIENT ALS APK
 * SERVER BROADCAST > CLIENT SUCHT NACH BROADCAST!
 *
 *
 */

app.use(express.static('static/frontend', {
  maxAge: '1000' // uses milliseconds per docs
}))
app.use(express.static('/gallery', {
  maxAge: '1000' // uses milliseconds per docs
}))

app.get('/shoot', async (req, res) => {
  const {pictureTaken, picture} = await camera.takePicture()
  const path = require('path')
  const options = {
    root: pathUtil.join(__dirname)
  }
  if(pictureTaken) {
    res.sendFile(picture, options)
  }else{
    res.send(picture)
  }
  // fs.renameSync(picture, `./gallery/${picture}`)
})




httpServer.listen(port, () => {
  console.log(`Socket Server and Website listening at http://localhost:${port}`)
})

function saveConfig() {
  config.save(function (err) {
    require('fs').readFile(configFile, function (err, data) {
      console.dir(JSON.parse(data.toString()))
    });
  });
}



