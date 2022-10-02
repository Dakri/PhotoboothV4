<template>
  <div>
    Speicherverbrauch
    <q-list>
      <q-item>
      <q-item-section>
        <b>Name</b>
      </q-item-section>
      <q-item-section>
        <b>Größe</b>
      </q-item-section>
      <q-item-section>
       <b>Verbraucht</b>
      </q-item-section>
      <q-item-section>
        <b>Verfügbar</b>
      </q-item-section>
      <q-item-section>

      </q-item-section>
      </q-item>
    <q-item v-for="storeDevice in serverStatus.storageUsage" :key="storeDevice.dev">
      <q-item-section>
        <q-item-label><b>{{storeDevice.dev}}</b> </q-item-label>({{storeDevice.mount}})
      </q-item-section>
      <q-item-section>
        {{storeDevice.storage[0]}}
      </q-item-section>
      <q-item-section>
        {{storeDevice.storage[1]}}
      </q-item-section>
      <q-item-section>
        {{storeDevice.storage[2]}}
      </q-item-section>
      <q-item-section>
        <q-linear-progress size="25px" :value="storeDevice.storage[3]" :color="storageColorsGetter(storeDevice.storage[3])">
          <div class="absolute-full flex flex-center">
            <q-badge color="white" :text-color="storageColorsGetter(storeDevice.storage[3])" :label="storeDevice.storage[3]" />
          </div>
        </q-linear-progress>
      </q-item-section>
    </q-item>
    </q-list>
  </div>
</template>

<script>

import {useSettingsStore} from "stores/settings";
import {storeToRefs} from "pinia";

export default {
  name: "storageUsed",
  setup() {
    const settingsStore = useSettingsStore()
    const {serverStatus} = storeToRefs(settingsStore)
    const storageColorsGetter = ( value ) => {
      const colors = {50: "green", 75: "yellow-8", 90: "red"}
      const intValue = parseInt(value.replace(/\D/, ''))
      for(const key of Object.keys(colors) ) {
         if (intValue < key) {
           return colors[key]
         }
      }
      return colors[90]
    }

    return {
      serverStatus,
      storageColorsGetter
    }
  }
}
</script>

<style scoped>

</style>
