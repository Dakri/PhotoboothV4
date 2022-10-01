import { defineStore } from 'pinia';
import {useSocketStore} from "stores/socket";
import { Notify } from "quasar";

export const useGalleryStore = defineStore('gallery', {
  state: () => {
    return {
      gallery: {},
      socketStore: useSocketStore(),
      galleryImages: []
    }
  },
  getters: {
   currentGallery (state) {
     if(state.gallery.list && state.gallery.currentActive)
      return state.gallery.list[state.gallery.currentActive]
     return []
   }
  },
  actions: {
    initSocket() {
      this.socketStore.on('receiveGallery', (data) => {
        this.receiveGallery(data)
      })
      this.socketStore.on('receiveGalleryImages', (data) => {
        this.receiveGalleryImages(data)
      })

      this.requestGallery()
    },
    requestGallery() {
      console.log("request gallery")
      this.socketStore.socketClient.emit('requestGallery')
    },
    receiveGallery(newGallery) {
      console.log("receive gallery", newGallery)
      this.gallery = newGallery.list
    },
    removeGallery(galleryEntry) {
      this.socketStore.emit('removeGallery', galleryEntry)
   },
    clearGallery(galleryEntry) {
      this.socketStore.emit('clearGallery', galleryEntry)
   },
   addGallery(galleryEntry) {
      this.socketStore.emit('addGallery', galleryEntry)
   },
    requestGalleryImages(){
      this.socketStore.emit('requestGalleryImages')
    },
    receiveGalleryImages(data){
      this.galleryImages = data
    },
    setGalleryUsbTarget(galleryTarget, usbTarget) {
      this.socketStore.emit('setGalleryUsbTarget', {galleryTarget, usbTarget})
    },
    copyGalleryToUsbTarget(galleryTarget, usbTarget) {
      this.socketStore.emit('copyGalleryToUsbTarget', {galleryTarget, usbTarget})
    }
  },
});
