<template>
  <router-view />
  <q-dialog v-model="serverSearch" persistent >
    <q-card>
      <q-card-section>
        <h6>Serversuche:</h6>
      </q-card-section>

      <q-card-section class="row justify-center items-center ">
          <q-icon name="search"></q-icon>
        </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { defineComponent } from 'vue'
import {useSocketStore} from "stores/socket";
import {useSettingsStore} from "stores/settings";
import {useGalleryStore} from "stores/gallery";
import {Notify} from "quasar";
import {usePageStore} from "stores/page";
import {storeToRefs} from "pinia";

export default defineComponent({
  name: 'App',

  setup() {

    const socket = useSocketStore()
    socket.connect()
    const settings = useSettingsStore()
    settings.initSocket()
    const gallery = useGalleryStore()
    gallery.initSocket()

    const pageStore = usePageStore()
    const {serverSearch} = storeToRefs(pageStore)


    return {
      socket,
      serverSearch
    }
  }
})
</script>
