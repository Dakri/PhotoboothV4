const  exec = require('promise-exec')
const nconf = require('nconf')
const fs = require("fs");
const path = require("path")
const galleries = require("./gallery")

const storageService = {

  usbConf: null,
  oldStorageState: [],
  eventListener: [],

  constructor () {
    this.usbConf = new nconf.Provider()
    this.oldStorageState = []
  },

  async startMonitoring() {
    try {
      //Read USB Config
      this.usbConf.file({file: 'config/usb.json'})
      const usbDevices = this.usbConf.get('devices')
      //List up all devices and mountpoints
      const devices = [...usbDevices, {dev: '/dev/root', mount: '/gallery'}]
      try {
        //Read df -h storage sizes
        const dfOutput = await exec('df -h -BM')
        if(dfOutput) {
          const dfSplitted = dfOutput[0].split(/\r?\n/)
          for(const device of devices) {
            let dfMatch = undefined
            for (const dfSplit of dfSplitted) {
              const devDf = dfSplit.match(device.dev)
              if(devDf) {
                //Pregmatch size, free size, used size
                const dfValuesSplitted = dfSplit.match(/^.* ([0-9\.]+[MGT]) *([0-9\.]+[MGT]) *([0-9\.]+[MGT]) *([0-9]+%)/i)
                dfMatch = dfValuesSplitted.slice(1,5)
              }
            }
            if(dfMatch) {
              device.storage = dfMatch
            }else{
              throw(`No storage device found by path ${device.dev}`)
            }
          }
        }
      }catch(dfError) {
        console.error(dfError)
      }

      //diff with oldStorageState
      const diffHappened = await this.diff(devices)
      if(diffHappened){
        this.trigger('update', devices)
      }
      this.oldStorageState = devices

      //Trigger update event on change only? send new Data

    }catch(err){
      console.error(err)
    }

    setTimeout(() => {this.startMonitoring()}, 1500)
  },

  async readGallerySizes () {

  },

  async diff(storageState)  {
    const checks = []
    for(let i = 0; i < this.oldStorageState.length; i++ ) {
      if(
        this.oldStorageState[i] && storageState[i] &&
        this.oldStorageState[i].dev === storageState[i].dev &&
        this.oldStorageState[i].storage.join('.') === storageState[i].storage.join('.') &&
        this.oldStorageState[i].mount === storageState[i].mount) {
        checks.push(true)
      }
    }
    return checks.length !== this.oldStorageState.length || storageState.length !== this.oldStorageState.length
  },

  on(event, callback) {
    const eventHandle = {event, callback}
    this.eventListener.push(eventHandle)
  },

  trigger(event, data) {
    const events = this.eventListener.filter(el => el.event === event)
    for(const event of events) {
      event.callback(data)
    }
  }

}

storageService.constructor()
module.exports = storageService
