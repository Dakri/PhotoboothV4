const  exec = require('promise-exec')
const fs = require("fs");
const nconf= require('nconf')
const serverConf = new nconf.Provider()
const configFile = 'config/default.json'

serverConf.file({file: configFile})

const defaultSettings = {
  captureTarget: 0
}

module.exports =  {

  config: undefined,

  setup: async function (config, settings={}) {
    this.config = config
    const result = {}
    try {
      const localSettings = {...defaultSettings, ...settings}
      result.detectOutput = await exec(`gphoto2 --auto-detect | grep -i usb`)
    }catch(detectError) {
      result.detectError = detectError
    }
    if(result.detectOutput) {
      try {
        const cameraTarget = this.config.get('camera:storageTarget') || 0
        result.capturetargetOutput = await exec(`gphoto2 --set-config capturetarget=${cameraTarget}`)
      } catch (capturetargetError) {
        result.capturetargetError = capturetargetError
      }
    }
    return result

   },



  takePicture: async function () {
    let output = ""
    try {
      output = await exec('gphoto2 --capture-image-and-download --force-overwrite')
      const matches = output.join('').replaceAll(/[\r\n]/isg, '').match(/[^\w]([\w]+.jpg)/i)
      if (matches) {
        // fs.copyFileSync(matches[1], `/gallery/${matches[1]}`)
        // fs.unlink(matches[1], () => {console.log('file deleted')} )
        return {pictureTaken: true, picture: matches[1]}
      }
    }catch(cameraTakeError){
      output = cameraTakeError
      console.error(cameraTakeError)
    }
    return {pictureTaken: false, picture: output}
  },

  compressPreview: async function (imagePath, options) {
    const previewImagePath = '/preview/preview.jpg'
    const previewWidth = serverConf.get('camera:previewResolution:w')
    console.log("compress jpeg", previewWidth)
    const command = `epeg --width=${previewWidth} --preserve --quality=70 ${imagePath} /gallery/${previewImagePath}`
    let output = ''
    try {
      output = await exec(command)
      return previewImagePath
    }catch(error){
      console.error(error)
      throw ({error, output})
    }
  }
}
