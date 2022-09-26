<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated v-if="pageState.showHeader">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Photobooth V4 (<q-chip v-if="connected" color="green">Verbunden</q-chip><q-chip v-if="!connected" color="red">Nicht verbunden </q-chip><q-btn icon="search" v-if="!connected" @click="serverSearch=true">Suchen</q-btn>)
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-if="pageState.showMenu"
      v-model="pageState.leftDrawerOpen"
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Photobooth Menu
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container >
      <router-view   />
    </q-page-container>


    <q-footer elevated class="bg-grey-8 text-white footer">

    </q-footer>

  </q-layout>
</template>

<script>
import {defineComponent, ref, watch} from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import {usePageStore} from "stores/page";
import { storeToRefs } from 'pinia'
import {useQuasar} from "quasar";
import {useSocketStore} from "stores/socket";

const linksList = [
  {
    title: 'Dashboard',
    caption: 'Overview',
    icon: 'dashboard',
    link: '/#/'
  },
  {
    title: 'Client',
    caption: 'Trigger / Preview / Gallery',
    icon: 'camera',
    link: '/#/client',
  },
  {
    title: 'Settings',
    caption: 'Delay, Preview Timer, Camera',
    icon: 'settings',
    link: '/#/settings'
  },
  {
    title: 'Gallery',
    caption: 'Gallery Overview',
    icon: 'collections',
    link: '/#/gallery'
  },
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const pageState = usePageStore()
    const socketStore = useSocketStore()
    const {connected} = storeToRefs(socketStore)
    const {serverSearch} = storeToRefs(pageState)




    return {
      connected,
      serverSearch,
      pageState,
      essentialLinks: linksList,
      toggleLeftDrawer () {
        pageState.leftDrawerOpen = !pageState.leftDrawerOpen
      }
    }
  }
})
</script>
