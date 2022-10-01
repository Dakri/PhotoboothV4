import { defineStore } from 'pinia';
import {Notify, useQuasar} from "quasar";
import { AppFullscreen } from 'quasar';
import { useStorage } from '@vueuse/core'
import {watch} from "vue";



export const usePageStore = defineStore('page', {
  state: () => {
    return {
      fullscreen: false,
      devMode: useStorage('client-devMode', false),
      mode: useStorage('client-mode', 'full'),
      showHeader:  true,
      // showHeader: useStorage('client-showHeader', true),
      showMenu: true,
      // showMenu: useStorage('client-showMenu', true),
      leftDrawerOpen:useStorage('client-leftDrawerOpen', false),
      serverSearch: false
    }
  },
  actions: {
    goFullScreen() {
      AppFullscreen.request()
      .then(() => {

      })
      .catch(err => {
        // oh, no!!!
      })
    }
  },
});

