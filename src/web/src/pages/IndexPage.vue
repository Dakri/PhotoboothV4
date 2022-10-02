<template>
  <q-page >
    <div class="q-gutter-lg q-pa-lg">
      <q-card>
        <q-card-section>
          <h5>Bitte beachten</h5>
          <q-list>
            <q-item>
              <q-item-section>
              <q-label>
                Kamera Konfiguration
              </q-label>
                <ul>
                  <li>Belichtung / Blitz einstellen</li>
                  <li>Fokus setzen und auf manuell stellen</li>
                </ul>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label>
                  Photobooth Einstellungen
                </q-item-label>
                <ul>
                  <li>USB Stick anschließen und für Live-Kopie konfigurieren</li>
                  <li>Eine neue Gallerie erstellen, alte ggf. für mehr Speicherplatz löschen</li>
                  <li>Testfotos machen und ggf. Delay für den Auslöser in den Einstellungen anpassen</li>
                </ul>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label>
                  Tipps und Tricks
                </q-item-label>
                <ul>
                  <li>Um im Client-Mode wieder auf Admin-Funktionen zuzugreifen, mehrfach auf Bildschirm tippen</li>
                </ul>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>
      <q-card>
        <q-card-section>
          <storage-used></storage-used>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { ref, computed } from 'vue'
import { useSocketStore } from "stores/socket";
import { format } from 'echarts'
import StorageUsed from "components/storage/storageUsed";

export default {
  name: 'IndexPage',
  components: {StorageUsed  },
  setup() {
    const socket = useSocketStore()


    return {
      socket,
    }
  }
}
</script>

<style>
.card-storage{
  background-color: #2c343c;
  color: #f0f0f0;
}
</style>
