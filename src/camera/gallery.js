const  exec = require('promise-exec')
const nconf = require('nconf')
const fs = require("fs");
const md5 = require("md5")
const serverConf = new nconf.Provider()
const galleryStore = new nconf.Provider()
galleryStore.file({file: '/gallery/gallery.json'})

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
    galleryStore.file({file: '/gallery/gallery.json'})
    const activeGallery = galleryStore.get('activeGallery')
    const gallery = galleryStore.get(`gallery:${activeGallery}`)
    const pictureBase = newPicture.replace(/jpeg|jpg/i, '')
    const lsOutput  = await exec(`ls | grep -i "${pictureBase}"`)
    const currentFiles = lsOutput[0].split(/\r?\n/)
    currentFiles.pop()
    const copyJobs = []
    if(gallery && currentFiles.length > 0) {
      const targetJpgDir = `/gallery/${gallery.id}/DCIM/jpg`
      const targetRawDir = `/gallery/${gallery.id}/DCIM/raw`
      const targetThumbDir = `/gallery/${gallery.id}/thumbnails`
      const targetPreviewDir = `/gallery/${gallery.id}/preview`

      if(!fs.existsSync(targetJpgDir)) {
        fs.mkdirSync(targetJpgDir, {recursive: true})
      }
      if(!fs.existsSync(targetRawDir)) {
        fs.mkdirSync(targetRawDir, {recursive: true})
      }
      if(!fs.existsSync(targetThumbDir)) {
        fs.mkdirSync(targetThumbDir, {recursive: true})
      }
      if(!fs.existsSync(targetPreviewDir)) {
        fs.mkdirSync(targetPreviewDir, {recursive: true})
      }

      const currentFileCount = await exec(`ls ${targetThumbDir} | wc -l`)
      const currentFileNumber = (parseInt(currentFileCount) + 1 ).pad(5)
      gallery.photos++

      galleryStore.set(`gallery:${gallery.id}`, gallery)
      galleryStore.save()

      for(const image of currentFiles) {
        const ext = image.split('.').pop().toLowerCase()
        switch(ext) {
          case 'jpg':
          case 'jpeg':
            const thumbnail = await this.compressThumbnail(image)
            copyJobs.push(this.moveFile(thumbnail, `${targetThumbDir}/img${currentFileNumber}.jpg`))
            copyJobs.push(this.moveFile(image, `${targetJpgDir}/img${currentFileNumber}.jpg`))
            copyJobs.push(this.copyFile('/gallery/preview/preview.jpg', `${targetPreviewDir}/img${currentFileNumber}.jpg`))
            break;
          default:
            copyJobs.push(this.moveFile(image, `${targetRawDir}/img${currentFileNumber}.${ext}`))
            break;

        }
      }
      return Promise.all(copyJobs)
    }
    return false
  },

  removeGallery: async function (galleryObject) {
    galleryStore.file({file: '/gallery/gallery.json'})
    const id = galleryObject.id
    const galleryPath = `/gallery/${id}`
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

    galleryStore.set('list', list)
    galleryStore.set('gallery', galleryObjects)
    galleryStore.save()
    return true

  },

  setGallery: async function (newGallery) {
    galleryStore.file({file: '/gallery/gallery.json'})
    const list = galleryStore.get('list')
    const galleryIndex = newGallery.id || md5(newGallery.name.toLowerCase())
    const galleryObj = {name: '', photos: 0, storedOnUSB: 0, usbTarget:null, ...newGallery, active: null, id: galleryIndex }

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

    const galleryPath = `/gallery/${galleryIndex}`
    if(!fs.existsSync(galleryPath) ) {
      fs.mkdirSync(galleryPath)

      const targetJpgDir = `/gallery/${galleryIndex}/DCIM/jpg`
      const targetRawDir = `/gallery/${galleryIndex}/DCIM/raw`
      const targetThumbDir = `/gallery/${galleryIndex}/thumbnails`
      const targetPreviewDir = `/gallery/${galleryIndex}/preview`

      if(!fs.existsSync(targetJpgDir)) {
        fs.mkdirSync(targetJpgDir, {recursive: true})
      }
      if(!fs.existsSync(targetRawDir)) {
        fs.mkdirSync(targetRawDir, {recursive: true})
      }
      if(!fs.existsSync(targetThumbDir)) {
        fs.mkdirSync(targetThumbDir, {recursive: true})
      }
      if(!fs.existsSync(targetPreviewDir)) {
        fs.mkdirSync(targetPreviewDir, {recursive: true})
      }
    }

    galleryStore.save()
    return true
  },

  list: async function  () {
    galleryStore.file({file: '/gallery/gallery.json'})
    const list = {... galleryStore.get('gallery')}
    const currentActive = galleryStore.get('activeGallery')
    return {list, currentActive}

  },

  getCurrentGalleryImages: async function () {
    galleryStore.file({file: '/gallery/gallery.json'})
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
