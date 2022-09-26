<template>
<q-list>
  <q-item v-for="usbDevice in devices.list" :key="usbDevice.name">
    <q-item-section>
      <q-item-label>{{usbDevice.name}}</q-item-label>
    </q-item-section>
    <q-item-section>
      <q-select v-model="usbDevice.type" @input="$emit('input')" :options="[{label: 'Dynamisch', value: 'dynamicStorage'}, {label: 'Kein', value: 'none'}]"></q-select>
    </q-item-section>
  </q-item>
</q-list>
</template>

<script>
export default {
  name: 'UsbDevices',
  props: {
    devices: {
      type: Object,
      default: () => {list: []}
    },
  },

  setup() {
    return {

    }
  }
}

</script>
