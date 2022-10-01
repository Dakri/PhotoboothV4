<template>
<q-list>
  <q-item >
    <q-item-section>
      <q-item-label>Gerät</q-item-label>
    </q-item-section>
    <q-item-section>
      <q-item-label>Größe</q-item-label>
    </q-item-section>
    <q-item-section>
      <q-item-label>Mountpunkt</q-item-label>
    </q-item-section>
    <q-item-section>
      <q-item-label>Aktion</q-item-label>
    </q-item-section>
  </q-item>
  <q-item v-for="usbDevice in devices" :key="usbDevice.name">
    <q-item-section>
      <q-item-label>{{usbDevice.dev}}</q-item-label>
    </q-item-section>
    <q-item-section>
      <q-item-label>{{usbDevice.size}}</q-item-label>
    </q-item-section>
    <q-item-section>
      <q-item-label>{{usbDevice.mount}}</q-item-label>
    </q-item-section>
    <q-item-section>
      <slot name="action" v-bind="usbDevice"></slot>
    </q-item-section>
  </q-item>
</q-list>
</template>

<script>
export default {
  name: 'UsbDevices',
  props: {
    devices: {
      type: Array,
      default: () => []
    },
  },

  setup() {
    return {

    }
  }
}

</script>
