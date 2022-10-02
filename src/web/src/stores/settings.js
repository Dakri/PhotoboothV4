import { defineStore } from 'pinia';
import {useSocketStore} from "stores/socket";
import { Notify } from "quasar";

export const useSettingsStore = defineStore('settings', {
  state: () => {
    return {
      settings: {},
      serverStatus: {},
      socketStore: useSocketStore()
    }
  },
  actions: {
    initSocket() {
      this.socketStore.on('receiveSettings', (data) => {
        this.receiveSettings(data)
      })
      this.socketStore.on('savedSettings', (data) => {
        this.savedSettings(data)
      })
      this.socketStore.on('serverStatus', (data) => {
        console.log("serverstatus", {data})
        this.serverStatus = data
      })
      this.socketStore.on('storageWarning', (data) => {
        console.log("storageWarning", {data})
          if(currentRoute === '/client') {

          }else {
            Notify.create({
              type: 'warning',
              message: data.map((d) => `${d.dev} (${d.mount}) ist bereits halb voll`).join('<br>'),
              html: true,
              caption: false,
              badgeStyle: "opacity: 0"
            })
          }
      })
      this.socketStore.on('storageError', (data) => {
        console.log("storageError", {data})
        const currentRoute = this.router.options.history.location
        if(currentRoute === '/client') {
          Notify.create({
            type: 'negative',
            message: data.map((d) => `Speicherplatz fast voll - Bitte Fotografen bescheid geben`).join('<br>'),
            html: true,
            caption: false,
            badgeStyle: "opacity: 0"
          })
        }else {
          Notify.create({
            type: 'negative',
            message: data.map((d) => `${d.dev} (${d.mount}) ist bald voll`).join('<br>'),
            html: true,
            caption: false,
            badgeStyle: "opacity: 0"
          })
        }
      })

      this.requestSettings()
    },
    requestSettings() {
      console.log("request settings")
      this.socketStore.requestSettings()
    },
    receiveSettings(newSettings) {
      console.log("receive settings", newSettings)
      this.settings = newSettings
    },
    savedSettings(message) {
      console.log("message settings", message)
      Notify.create({
        type: message.type,
        message: message.text
      })
    },
    saveSettings() {
      this.socketStore.sendSettings(this.settings)
    }
  },
});
