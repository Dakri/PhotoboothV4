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
