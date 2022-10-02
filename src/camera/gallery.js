const  exec = require('promise-exec')
const nconf = require('nconf')
const fs = require("fs");
const fsExtra = require("fs-extra")
const md5 = require("md5")
const serverConf = new nconf.Provider()
const galleryStore = new nconf.Provider()
galleryStore.file({file: 'config/gallery.json'})

Number.prototype.pad = function(size) {
  var s = String(this);
  while (s.length < (size || 2)) {s = "0" + s;}
  return s;
}

const defaultSettings = {

}

module.exports =  {

  setup: async function (settings={}) {
   },

  moveFile: async function (oldPath, newPath) {
    const promise = new Promise( (resolve, reject) => {
      fs.copyFile(oldPath, newPath, err => {
        if( err ) {
          console.error(err)
          return reject(err)
        }

        fs.unlink(oldPath, (err) => {
          if(err) {
            console.error(err)
            reject(err)
          }
          console.log(`File moved: ${oldPath} to ${newPath}`)
          resolve('file moved')
        })
      })
    })
    return promise
  },
  copyFile: async function (oldPath, newPath) {
    const promise = new Promise( (resolve, reject) => {
      fs.copyFile(oldPath, newPath, err => {
        if( err ) {
          console.error(err)
          return reject(err)
        }
          console.log(`File copied: ${oldPath} to ${newPath}`)
          resolve('file moved')
      })
    })
    return promise
  },

  compressThumbnail: async function (imagePath, options) {
    serverConf.file({file: 'config/default.json'})
    const thumbnailImagePath = 'thumbnail.jpg'
    const thumbnailWidth = serverConf.get('gallery:resolution')
    const command = `epeg --width=${thumbnailWidth} --preserve --quality=90 ${imagePath} ${thumbnailImagePath}`
    let output = ''
    try {
      output = await exec(command)
      return thumbnailImagePath
    }catch(error){
      console.error(error)
      throw ({error, output})
    }
  },

  add: async function (newPicture) {
    galleryStore.file({file: 'config/gallery.json'})
    const activeGallery = galleryStore.get('activeGallery')
    const gallery = galleryStore.get(`gallery:${activeGallery}`)
    const pictureBase = newPicture.replace(/jpeg|jpg/i, '')
    const lsOutput  = await exec(`ls | grep -i "${pictureBase}"`)
    const currentFiles = lsOutput[0].split(/\r?\n/)
    currentFiles.pop()
    const copyJobs = []
    const copyUSBJobs = []

    if(gallery && currentFiles.length > 0) {
      const {targetThumbDir, targetJpgDir, targetPreviewDir, targetRawDir, targetUsbDir} = this.ensureGalleryPaths(gallery)

      const currentFileCount = await exec(`ls ${targetThumbDir} | wc -l`)
      const currentFileNumber = (parseInt(currentFileCount) + 1 ).pad(5)

      for(const image of currentFiles) {
        const ext = image.split('.').pop().toLowerCase()
        switch(ext) {
          case 'jpg':
          case 'jpeg':
            const thumbnail = await this.compressThumbnail(image)
            copyJobs.push(this.moveFile(thumbnail, `${targetThumbDir}/img${currentFileNumber}.jpg`))
            copyJobs.push(this.moveFile(image, `${targetJpgDir}/img${currentFileNumber}.jpg`).then( () =>{
              if(!targetUsbDir) return
              copyUSBJobs.push(this.copyFile(`${targetJpgDir}/img${currentFileNumber}.jpg`, `${targetUsbDir}/${targetJpgDir}/img${currentFileNumber}.jpg`))
            }))
            copyJobs.push(this.copyFile('/gallery/preview/preview.jpg', `${targetPreviewDir}/img${currentFileNumber}.jpg`))
            break;
          default:
            copyJobs.push(this.moveFile(image, `${targetRawDir}/img${currentFileNumber}.${ext}`).then( () =>{
              if(!targetUsbDir) return
              copyUSBJobs.push(this.copyFile(`${targetRawDir}/img${currentFileNumber}.${ext}`, `${targetUsbDir}/${targetRawDir}/img${currentFileNumber}.${ext}`))
            }))
            break;

        }

      }
      await Promise.all(copyJobs)
      await Promise.all(copyUSBJobs)
      gallery.photos++
      if(targetUsbDir) {
        gallery.storedOnUSB++
      }

      galleryStore.set(`gallery:${gallery.id}`, gallery)
      galleryStore.save()
    }
    return false
  },

  clearGallery: async function (galleryObject) {
    galleryStore.file({file: 'config/gallery.json'})
    const id = galleryObject.id
    const {galleryPath, targetUsbDir} = this.ensureGalleryPaths(galleryObject)
    if(!id) {
      return false
    }

    const galleryConfObject = galleryStore.get(`gallery:${id}`)

    if(fs.existsSync(galleryPath) ) {
      fs.rmSync(`${galleryPath}/preview`, { recursive: true, force: true })
      fs.rmSync(`${galleryPath}/thumbnails`, { recursive: true, force: true })
      fs.rmSync(`${galleryPath}/DCIM`, { recursive: true, force: true })
    }
    if(targetUsbDir && fs.existsSync(targetUsbDir) ) {
      fs.rmSync(`${targetUsbDir}/${galleryPath}/DCIM`, { recursive: true, force: true })
    }

    galleryConfObject.photos = 0
    galleryConfObject.storedOnUSB = 0

    galleryStore.set(`gallery:${id}`, galleryConfObject)
    galleryStore.save()
  },

  removeGallery: async function (galleryObject) {
    galleryStore.file({file: 'config/gallery.json'})
    const id = galleryObject.id
    const {galleryPath, targetUsbDir} = this.ensureGalleryPaths(galleryObject)
    if(!id) {
      return false
    }


    let list = galleryStore.get('list')
    const galleryObjects = galleryStore.get('gallery')
    let activeGallery = galleryStore.get('activeGallery')
    list = list.filter(lv => lv !== id)
    delete galleryObjects[id]
    if(activeGallery === id) {
      activeGallery = list.length > 0 ? list[0] : ''
      galleryStore.set('activeGallery', activeGallery)
    }

    if(fs.existsSync(galleryPath) ) {
      fs.rmSync(galleryPath, { recursive: true, force: true })
    }

    if(targetUsbDir && fs.existsSync(targetUsbDir) ) {
      fs.rmSync(`${targetUsbDir}/${galleryPath}`, { recursive: true, force: true })
    }

    galleryStore.set('list', list)
    galleryStore.set('gallery', galleryObjects)
    galleryStore.save()
    return true

  },

  buildGalleryId(gallerySettings) {
    return gallerySettings.id || md5(gallerySettings.name.toLowerCase())
  },

  getDefaultGalleryObject(gallerySettings) {
    const galleryIndex = this.buildGalleryId(gallerySettings)
    return {name: '', photos: 0, storedOnUSB: 0, usbTarget:null, ...gallerySettings, active: null, id: galleryIndex }
  },

  buildGalleryUsbPath(gallerySettings) {
    if(gallerySettings.usbTarget) {
      const usbMount = `${gallerySettings.usbTarget.mount}/photobooth`
      if(usbMount)
        return usbMount
      return undefined
    }
    return undefined
  },

  ensureGalleryPaths(gallerySettings) {
    const galleryIndex = this.buildGalleryId(gallerySettings)
    const usbPath = this.buildGalleryUsbPath(gallerySettings)
    const galleryPath = `/gallery/${galleryIndex}`

    const targetJpgDir = `/gallery/${galleryIndex}/DCIM/jpg`
    const targetRawDir = `/gallery/${galleryIndex}/DCIM/raw`
    const targetThumbDir = `/gallery/${galleryIndex}/thumbnails`
    const targetPreviewDir = `/gallery/${galleryIndex}/preview`

    const targetUsbDir = (usbPath)?usbPath:false


    if (!fs.existsSync(galleryPath)) {
      fs.mkdirSync(galleryPath)


      if (!fs.existsSync(targetJpgDir)) {
        fs.mkdirSync(targetJpgDir, {recursive: true})
      }
      if (!fs.existsSync(targetRawDir)) {
        fs.mkdirSync(targetRawDir, {recursive: true})
      }
      if (!fs.existsSync(targetThumbDir)) {
        fs.mkdirSync(targetThumbDir, {recursive: true})
      }
      if (!fs.existsSync(targetPreviewDir)) {
        fs.mkdirSync(targetPreviewDir, {recursive: true})
      }
    }

    if(targetUsbDir) {
      if (!fs.existsSync(`${targetUsbDir}/${targetJpgDir}`)) {
        fs.mkdirSync(`${targetUsbDir}/${targetJpgDir}`, {recursive: true})
      }
      if (!fs.existsSync(`${targetUsbDir}/${targetRawDir}`)) {
        fs.mkdirSync(`${targetUsbDir}/${targetRawDir}`, {recursive: true})
      }
    }

    return {
      galleryPath, targetJpgDir, targetRawDir, targetThumbDir, targetPreviewDir, targetUsbDir
    }
  },

  getGalleryObject: async function (gallerySettings) {
    if(gallerySettings) {
      galleryStore.file({file: 'config/gallery.json'})
      const id = this.buildGalleryId(gallerySettings)
      return {id, galleryObject: galleryStore.get(`gallery:${id}`)}
    }
    return false
  },

  saveGalleryObjectConfig: async function (galleryObject) {
    if(galleryObject.id) {
      galleryStore.file({file: 'config/gallery.json'})
      galleryStore.set(`gallery:${galleryObject.id}`, galleryObject)
      galleryStore.save()
      return true
    }
    return false
  },

  setGallery: async function (newGallery) {
    galleryStore.file({file: 'config/gallery.json'})
    const list = galleryStore.get('list')
    const galleryIndex = this.buildGalleryId(newGallery)
    const galleryObj = this.getDefaultGalleryObject(newGallery)

    console.log(galleryIndex)
    if(list.includes(galleryIndex)) {
      //No List Entry , just update
    }else {
      list.push(galleryIndex)
      galleryStore.set('list', list)
    }
    galleryStore.set(`gallery:${galleryIndex}`, galleryObj)

    const currentActiveGallery = galleryStore.get(`activeGallery`)
    if(newGallery.active || !currentActiveGallery ) {
      galleryStore.set(`activeGallery`, galleryIndex)
    }

    this.ensureGalleryPaths(galleryObj)

    galleryStore.save()
    return true
  },

  setGalleryUsb: async function (galleryTarget, usbtarget) {
    if(!galleryTarget || !usbtarget) {
      return false
    }
    const {id, galleryObject} = await this.getGalleryObject(galleryTarget)
    galleryObject.usbTarget = usbtarget
    await this.saveGalleryObjectConfig(galleryObject)

  },


  copyGalleryToUsb: async function (galleryTarget, usbtarget) {
    if(!galleryTarget || !usbtarget) {
      return false
    }
    console.log({galleryTarget, usbtarget})
    const id = this.buildGalleryId(galleryTarget)
    galleryStore.file({file: 'config/gallery.json'})
    const galleryObject = galleryStore.get(`gallery:${id}`)
    const {galleryPath, targetUsbDir} = this.ensureGalleryPaths(galleryObject)
    console.log("copy", {galleryPath, targetUsbDir})
    if(targetUsbDir) {
      return fsExtra.copySync(galleryPath+'/DCIM', `${targetUsbDir}/${galleryPath}/DCIM`, {
        overwrite: true
      })
    }
    return false
  },

  removeUsbConfigFromGallery: async function (usbList) {
    galleryStore.file({file: 'config/gallery.json'})
    const galleryObjects = galleryStore.get(`gallery`)
    for(const galleryKey of Object.keys(galleryObjects)) {
      if(galleryObjects[galleryKey].usbTarget && !usbList.find( usb => galleryObjects[galleryKey].usbTarget.dev === usb.dev)) {
        galleryObjects[galleryKey].usbTarget = null
      }
    }
    galleryStore.set(`gallery`, galleryObjects)
    galleryStore.save()
  },

  list: async function  () {
    galleryStore.file({file: 'config/gallery.json'})
    const list = {... galleryStore.get('gallery')}
    const currentActive = galleryStore.get('activeGallery')
    return {list, currentActive}

  },

  getCurrentGalleryImages: async function () {
    galleryStore.file({file: 'config/gallery.json'})
    const currentActive = galleryStore.get('activeGallery')
    try {
      const imagesList = await exec(`ls /gallery/${currentActive}/thumbnails/`)
      const images = imagesList[0].split(/\r?\n/i)
      images.pop()
      return images
    }catch(error) {
      console.error(error)
      return []
    }
  }
}
