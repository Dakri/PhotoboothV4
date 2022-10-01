var fs = require('fs');
// var gphoto2 = require('gphoto2');
// var GPhoto = new gphoto2.GPhoto2();
const pathUtil = require('path')
const nconf = require('nconf')
const express = require('express')
const cors = require('cors')
const http = require('http')
const usb = require('./usb')
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
const config = new nconf.Provider()

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



usb.startMonitoring()


let availableUsbDevices = []
usb.on('update', async (currentUsbDevices) => {
  const usbConfig = new nconf.Provider()
  usbConfig.file({file: 'config/usb.json'})
  availableUsbDevices = currentUsbDevices
  console.log("change!", currentUsbDevices)
  for(const [dev, usbConf] of Object.entries(usbConfig)) {
    const usbDeviceAlive = currentUsbDevices.find(cud => cud.dev === dev)
    if(usbDeviceAlive) {
      usbConfig[dev].device = usbDeviceAlive
    }else{
      delete usbConfig[dev]
    }
  }
  await gallery.removeUsbConfigFromGallery(currentUsbDevices)
  config.set('usb', usbConfig)
  config.save()


  const defaultConfig = config.get()
  defaultConfig.availableUsb = availableUsbDevices
  ioServer.emit('receiveSettings', defaultConfig)
  ioServer.emit('receiveGallery', {list: await gallery.list()})


})



let cameraAliveCheck = true
let cameraFound = false
cameraAliveService =  async () => {
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
let cameraAliveInterval = setInterval(cameraAliveService, 5000)
cameraAliveService()

const clientList = []
ioServer.on('connection', (socket) => {
  clientList.push(socket)
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
    const defaultConfig = config.get()
    defaultConfig.availableUsb = availableUsbDevices
    socket.emit('receiveSettings', defaultConfig)
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
    console.log({newGallery})
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

  socket.on('clearGallery', async (oldGallery) => {
    console.log("clearGallery")
    const clearComplete = await gallery.clearGallery(oldGallery)
    if(clearComplete) {
      socket.emit('clearGallerySuccess')
    }else{
      socket.emit('clearGalleryFailed')
    }
  })

  socket.on('setGalleryUsbTarget', async ({galleryTarget, usbTarget}) => {
    console.log({galleryTarget, usbTarget})
    const setComplete = await gallery.setGalleryUsb(galleryTarget, usbTarget)
    if(setComplete) {
      socket.emit('setGalleryUsbTargetSuccess')
    }else{
      socket.emit('setGalleryUsbTargetFailed')
    }
  })

  socket.on('copyGalleryToUsbTarget', async ({galleryTarget, usbTarget}) => {
    console.log({galleryTarget, usbTarget})
    const setComplete = await gallery.copyGalleryToUsb(galleryTarget, usbTarget)
    if(setComplete) {
      socket.emit('setGalleryUsbTargetSuccess')
    }else{
      socket.emit('setGalleryUsbTargetFailed')
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
    const countdownTime= parseInt(config.get('camera:countdown')) * 1000
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
          gallery.add(picture).then(() => {ioServer.emit('gallery', {type: 'update'})})
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
      cameraAliveInterval = setInterval(cameraAliveService, 5000)
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
 * TODO NACH RÜCKSPRACHE 26.09.2022
 * - Speicherzielort der Gallery!
 * Möglichkeiten: Spiegelung oder direkt auf USB lagern
 * Download direkt auf anderes USB Gerät wenigstens Testen (tempo und zuverlässigkeit)
 * Gallerie auf Knopfdruck auf USB übertragen
 *
 * Client Modus: Text auf Bildschirm bearbeiten (Statt Auslöser Drücken, "guck in die kamera" schreiben)
 * Client Modus: Animierter Buzzer mit groben bereich drum rum zum tappen
 * Client Modus: Andere Option Auslöser + "Macht euch bereit"-text +  Preview ohne countdown
 *
 * Countdown Zeit einstellbar / Andere Countdown Style (Zahlen zoomen rein / raus über die kamera hinweg)
 * nth: Bei Countdown Textbasierten Styles: 0-Text anpassbar (z.B. "cheese" statt 0)
 * nth: Bildschirm Weiß flaschen lassen bei Foto (0) (Ein / ausschaltbar)
 *
 * Dashboard:
 * - Echter speicherplatzverbrauch wichtig
 * sonstige statistiken erstmal entfernen. neue Statistiken: nth
 * - Speichergröße pro Gallerie anzeigen
 *
 * Backend Checks:
 *  - Speicherplatz check des PI
 *  - Verbindung zum Server (PI) in der Website prüfen, und Meldung geben wenn nicht erreichbar
 *  - Sonstige Hardware checks (z.B ob konfiguriertes USB noch angeschlossen ist)
 *  - Wenn Fotos nicht gemacht werden konnten besser prüfen und Fehlerrückmeldung
 *
 *  Anzeigen von Fehlern DEUTLICH auf dem Bildschirm (je nachdem ob die funktionaltität eingeschränkt ist) Über den ganzen bildschirm
 *
 *  Animationen:
 *  IN-Animation und Out-Animationen erkennen und davor, bzw,. danach nicht anzeigen
 *  bzw. rückmeldung aus der Komponente "animationFinished" handler
 *
 *
 * Client als APP zur verfügung stellen inkl. broadcast erkennung Server (gleicher IP Kreis)
 * Benachrichtigungen aus dem Background (z.B. kamera nicht online, server nicht erreicht, andere fehlermeldungen vom backend)
 * Schlimme benachrictigungen (keine kamera z.B.) in vollbild sobald devmode beendet (und im client mode )
 *
 *
 */

app.use(express.static('static/frontend', {
  maxAge: '1000' // uses milliseconds per docs
}))
app.use(express.static('/gallery', {
  maxAge: '1000' // uses milliseconds per docs
}))


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



