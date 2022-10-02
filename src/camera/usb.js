const  exec = require('promise-exec')
const nconf = require('nconf')
const fs = require("fs");
const path = require("path")
const usbConf = new nconf.Provider()

module.exports = {

  usbDevicesState: [],
  eventListener: [],
  mounts: [],



  async startMonitoring() {
    try {
      usbConf.file({file: 'config/usb.json'})
      const usbDevicesList = await exec('fdisk -l | grep -iE  "^/dev/sd[^0-9]+[0-9]+"')
      const usbDevices = []
      for (const usbDevice of usbDevicesList[0].split(/\n/)) {
        const usbDataMatch = usbDevice.match(/(\/dev\/sd\D+\d+).* ([\d\.]+[GTM]).*/i)
        if (usbDataMatch && usbDataMatch.length > 1) {
          const device = {dev: usbDataMatch[1], size: usbDataMatch[2], format: usbDataMatch[3], mount: ''}
          const mountPoint = await exec(`findmnt -S ${device.dev} | grep -i "${device.dev}"| awk '{print $1}'`)
          if (mountPoint.length > 0 && mountPoint[0] !== '' ) {
            device.mount = mountPoint[0].replace(/\r?\n/, '')
          }else{
            console.log(mountPoint)
            //if not mounted already try to mount
            const devName = path.basename(device.dev)
            console.log("CREATE MOUNT", devName)
            if(!fs.existsSync(`/mnt/usb/${devName}`)) {
              fs.mkdirSync(`/mnt/usb/${devName}`, {recursive: true})
            }
            try {
              await exec(`umount /mnt/usb/${devName} -l && sleep 1`)
            }catch(ok){}
            try{
              await exec(`mount ${device.dev} /mnt/usb/${devName}`)
              device.mount = `/mnt/usb/${devName}`
            }catch(mountErr) {
              console.error(mountErr)
              device.mount = false
            }
          }
          usbDevices.push(device)
        }
      }

      const diff = this.usbDiff(usbDevices)
      usbConf.set('devices', usbDevices)
      usbConf.save()
      if (diff) {
        // console.log("diff...")
        this.trigger('update', usbDevices)
      }
      this.usbDevicesState = usbDevices
      setTimeout(() => {
        this.startMonitoring()
      }, 200)
    }catch(err) {
      console.error(err)
      this.trigger('update', [])
      this.usbDevicesState = []
      setTimeout(() => {
        this.startMonitoring()
      }, 1000)
    }
  },

  usbDiff(usbDevices) {
    const checks = []
    for(let i = 0; i < this.usbDevicesState.length; i++ ) {
      if(
        this.usbDevicesState[i] && usbDevices[i] &&
        this.usbDevicesState[i].dev === usbDevices[i].dev &&
         this.usbDevicesState[i].size === usbDevices[i].size &&
        this.usbDevicesState[i].format === usbDevices[i].format &&
        this.usbDevicesState[i].mount === usbDevices[i].mount) {
        checks.push(true)
      }
    }
    return checks.length !== this.usbDevicesState.length || usbDevices.length !== this.usbDevicesState.length
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
