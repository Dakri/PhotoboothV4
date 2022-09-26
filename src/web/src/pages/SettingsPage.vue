<template>
  <q-page style="background-color: #ffffff;" >
    <div class="full-width full-height ">

          <q-tabs
            v-model="tab"
            horizontal
            class="bg-teal text-white"
            keep-alive
          >
            <q-tab name="general" icon="settings" label="Allgemein" />
            <q-tab name="camera" icon="camera" label="Kamera" />
            <q-tab name="gallery" icon="collections" label="Galerie" />
            <q-tab name="usb" icon="usb" label="Usb" />
            <q-tab name="clients" icon="computer" label="Clients" />
          </q-tabs>
          <q-tab-panels
            v-model="tab"
            animated
            swipeable
            horizontal
            infinite
            transition-prev="jump-right"
            transition-next="jump-left"
          >
            <q-tab-panel name="general">
              <div class="text-h4 q-mb-md">Allgemein</div>
              <div class="q-gutter-md">
                <q-input filled type="text" v-model.lazy="app.password" @update:model-value="updateSettings" label="Passwort für allgemeinen Zugriff" hint="Default:  photobooth"  />
                <q-input filled type="text" v-model.lazy="settings.password" @update:model-value="updateSettings" label="Passwort um Einstellungen zu ändern" hint="Default:  photobooth"  />
                <q-input filled type="text" v-model.lazy="gallery.password" @update:model-value="updateSettings" label="Passwort um Gallerie einzusehen" hint="Default:  photobooth"  />
              </div>
            </q-tab-panel>

            <q-tab-panel name="camera">
              <div class="text-h4 q-mb-md">Kamera/Bild Einstellungen</div>
              <div class="q-gutter-md">
                <q-input filled type="number" v-model.lazy="camera.triggerDelay" @update:model-value="updateSettings" label="Auslöser Verzögerung" hint="Default:  -465" prefix="Millisekunden" />
                <q-input filled type="number" v-model.lazy="camera.countdown" @update:model-value="updateSettings" label="Auslöser Countdown" hint="Default:  3" prefix="Sekunden"  />
                <q-input filled type="number" v-model.lazy="camera.previewTimeout" @update:model-value="updateSettings" label="Bildanzeige Timeout" hint="Default:  5" prefix="Sekunden"  />
              </div>
            </q-tab-panel>
            {{galleryList}}

            <q-tab-panel name="gallery">
              <div class="text-h4 q-mb-md">Galerie</div>
              <div class="q-gutter-md">
                <q-input filled type="text" v-model.lazy="gallery.resolution" @update:model-value="updateSettings" label="Breite Thumbnails" hint="Default:  80px" prefix="Width" />
              </div>
              <br>
              <div class="text-h4 q-mb-md">Galerien</div>
              <q-dialog v-model="confirmDelete" persistent>
                <q-card>
                  <q-card-section class="row items-center">
                    <q-avatar icon="trash" color="primary" text-color="white" />
                    <span class="q-ml-sm">Gallerie <b>{{toDeleteGallery.name}}</b> wirklich löschen?</span>
                  </q-card-section>

                  <q-card-actions align="right">
                    <q-btn flat label="Abbrechen" color="primary" v-close-popup />
                    <q-btn flat label="Löschen" color="primary" @click="removeGalleryConfirmed(toDeleteGallery)" v-close-popup />
                  </q-card-actions>
                </q-card>
              </q-dialog>
              <div class="q-gutter-md">
                <q-list class="gallery-list">
                  <q-item v-if="galleryList.length <= 0">
                    <q-item-section class="col-6" >
                      Noch keine Gallery vorhanden, bitte über das "+" erstellen
                    </q-item-section>
                  </q-item>
                  <q-item  v-for="galleryEntry in galleryList" :key="galleryEntry.id">
                    <q-item-section class="col-6" >
                      <q-item-label><b>{{ galleryEntry.name }}</b></q-item-label>
                      <q-item-label>{{galleryEntry.photos}} Fotos / {{galleryEntry.storedOnUSB}} Usb</q-item-label>
                    </q-item-section>
                    <q-item-section >
                      <q-item-label>
                        <q-icon name="check_circle" size="md" v-if="galleryEntry.active" color="green" filled />
                        <q-icon name="check_circle" size="md"  v-if="!galleryEntry.active" disabled="true" color="gray" />
                      </q-item-label>
                    </q-item-section>
                    <q-item-section class="text-right">
                      <q-item-label>
                        <q-btn color="primary" icon="menu">
                          <q-menu
                            transition-show="jump-down"
                            transition-hide="jump-up"
                          >
                            <q-list style="min-width: 100px">
                              <q-item clickable :disable="galleryEntry.active">
                                <q-item-section>Aktivieren</q-item-section>
                              </q-item>
                              <q-item clickable>
                                <q-item-section>USB Archiv</q-item-section>
                              </q-item>
                              <q-separator />
                              <q-item clickable>
                                <q-item-section @click="removeGallery(galleryEntry)" v-close-popup>Löschen</q-item-section>
                              </q-item>
                            </q-list>
                          </q-menu>
                        </q-btn>
                      </q-item-label>
                    </q-item-section>

                  </q-item>
                  <q-item >
                    <q-item-section class="text-right">
                    <div class="text-right">
                      <q-btn fab icon="add" color="primary" @click="showGalleryDialog=true"/>
                    </div>
                    </q-item-section>
                  </q-item>
                </q-list>
                <q-dialog v-model="showGalleryDialog">
                  <q-card>
                    <q-card-section>
                      <div class="text-h6">Neue Galerie erstellen</div>
                    </q-card-section>
                    <q-card-section>
                      <q-input v-model="newGallery.name" label="Galeriename"></q-input>
                    </q-card-section>
                    <q-card-section>
                      <q-checkbox v-model:model-value="newGallery.active" label="Beim erstellen aktiv"></q-checkbox>
                    </q-card-section>
                    <q-card-section>
                      <q-select v-model:model-value="newGallery.usb" label="Speicherziel (USB)" :options="[{label: '/mnt/usb1', value:'/mnt/usb1'}]">
                      </q-select>
                    </q-card-section>
                    <q-card-section>
                      <div class="row q-gutter-md">
                        <q-btn @click="confirmNewGallery()" color="positive">Erstellen</q-btn>
                        <q-btn v-close-popup color="negative">Abbrechen</q-btn>
                      </div>
                    </q-card-section>
                  </q-card>
                </q-dialog>
              </div>
            </q-tab-panel>
            <q-tab-panel name="usb">
              <div class="text-h4 q-mb-md">Usb Speicher</div>
              <usb-devices v-model:devices="usb"  @input="updateSettings"></usb-devices>
            </q-tab-panel>

            <q-tab-panel name="clients">
              <div class="text-h4 q-mb-md">Movies</div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            </q-tab-panel>
          </q-tab-panels>

<!--      {{settingsComp}}-->


    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { ref, computed } from 'vue'
import {useSettingsStore} from "stores/settings";
import UsbDevices from "components/settings/usbDevices";
import {debounce} from "quasar";
import {useGalleryStore} from "stores/gallery";

export default {
  name: 'SettingsPage',
  components: {UsbDevices},
  setup() {
    const settingsStore = useSettingsStore()
    const galleryStore = useGalleryStore()
    const settingsComp = computed(() => settingsStore.settings)
    const app = computed( () => { return settingsComp.value.app||{} })
    const settings = computed( () => { return settingsComp.value.settings||{} })
    const gallery = computed( () => { return settingsComp.value.gallery||{} })
    const camera = computed( () => { return settingsComp.value.camera||{} })
    const preview = computed( () => { return camera.value.preview||{} })
    const usb = ref({list: [
        {name: '/mnt/usb1', type:'dynamicStorage'},
        {name: '/mnt/usb2', type:'none'},
      ]})//computed( () => { return settingsComp.value.usb||{} })
    const clients = computed( () => { return settingsComp.value.clients||{} })
    const newGallery = ref({name: '', active: false, usb: ''})

    const galleryList = computed( () => {
      if(!galleryStore.gallery.list || !galleryStore.gallery.currentActive) {
        return []
      }
      const currentActiveGallery = galleryStore.gallery?.currentActive
      const galleryList = Object.values(galleryStore.gallery.list)
      const galleryFiltered = galleryList.map( (galleryEntry) => {
        galleryEntry.active =false
        if(galleryEntry.id === currentActiveGallery) {
          galleryEntry.active = true
        }
        return galleryEntry
      })
      return galleryFiltered
    })

    const showFooterButtons = ref(false)
    setTimeout( () => { showFooterButtons.value = true }, 200)

    const updateSettings = debounce(() => {
      console.log("save Settings")
      settingsStore.saveSettings()
    }, 500)

    const showGalleryDialog = ref(false)

    const confirmNewGallery = () => {
      galleryStore.addGallery(newGallery.value)
      newGallery.value = {name: '', active: false, usb: ''}
      galleryStore.requestGallery()
      showGalleryDialog.value=false
    }

    const confirmDelete = ref(false)
    const toDeleteGallery = ref({})

    const removeGallery = (gallery) => {
      toDeleteGallery.value = gallery
      confirmDelete.value = true
    }
    const removeGalleryConfirmed = (gallery) => {
      galleryStore.removeGallery(gallery)
      galleryStore.requestGallery()
    }
    galleryStore.requestGallery()

    return {
      tab: ref('gallery'),
      splitterModel: ref(20),
      showFooterButtons,
      settingsComp,
      app,
      settings,
      gallery,
      camera,
      usb,
      clients,
      updateSettings,
      galleryList,
      showGalleryDialog,
      newGallery,
      confirmNewGallery,
      removeGallery,
      toDeleteGallery,
      confirmDelete,
      removeGalleryConfirmed


    }
  }
}
</script>

<style lang="scss">

@media(min-width: 769px) {
  .gallery-list {
    max-width: 768px;
  }
}
</style>
