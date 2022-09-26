import { defineStore } from 'pinia';
import { io } from 'socket.io-client';
import {Notify} from "quasar";
import {socketUrl} from '../composition/urlFix';



console.log("Socket reinitialized")

export const useSocketStore = defineStore('socket', {
  state: () => ({
    socketClient: undefined,
    clientState: undefined,
    connected: false,

  }),
  getters: {
  },
  actions: {
    connect() {

      if(!this.socketClient?.connected) {
        const socket = io(socketUrl)
        this.socketClient = socket
        socket.on('connect', () => {
          console.log("connection")
          this.connected = true
        })
        socket.on('disconnect', () => {
          console.log("DISCONNECTION")
          this.connected = false
        })
        socket.on('noCamera', (message) => {
          Notify.create({type: "negative", caption: 'Kamera wurde nicht erkannt'})
        })

        socket.on('clientStatus', (message) => {
          const messageType = message.type === 'error' ? 'negative' : message.type === 'success' ? 'positive' : 'neutral'
          Notify.create({type: messageType, message: `Photobooth Meldung: ${message.message}`})
        })


      }

      // this.socketClient = io(`ws://${location.host.replace('8080', '3000')}`)
    },
    on(eventCommand, callback) {
      this.socketClient.on(eventCommand, callback)
    },
    once(eventCommand, callback) {
      this.socketClient.once(eventCommand, callback)
    },
    emit(emitCommand, data) {
      this.socketClient.emit(emitCommand, data)
    },
    trigger() {
      console.log("Trigger socket", {socket: this.socketClient})
      this.socketClient.emit('trigger')
    },
    requestSettings() {
      console.log("socket request send")
      this.socketClient.emit('requestSettings')
    },
    sendSettings(newSettings) {
      this.socketClient.emit('sendSettings', newSettings)
    },
    saveConfig() {
      this.socketClient.emit('config', {'camera:triggerDelay': -465})
    }
  },
});
