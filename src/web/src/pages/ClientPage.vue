<template>
  <q-page class="clientPage" @click="devModeTap()"  >

    <div class=" fit full-height row no-wrap justify-center items-center content-center"   >
      <h4 style="color: white">Auslöser betätigen</h4>
    </div>

    <q-dialog v-model="showTrigger"  class="clientDialog" persistent maximized>
      <div class=" fit full-height column wrap justify-center items-center content-center"  @click="devModeTap()" >
        <div class=""><q-btn icon="camera" color="white" text-color="black" size="xl"
                             class="trigger" @click="clickTrigger()" round></q-btn></div>
        <div class=""><h4 style="color: white">Auslöser betätigen</h4></div>
      </div>
    </q-dialog>


    <q-dialog v-model="showCountdown"  class="clientDialog" persistent maximized>
      <div   >
                <snes-countdown></snes-countdown>
      </div>
    </q-dialog>


    <q-dialog v-model="showWaitBetweenCountdownAndPreview"  class="clientDialog" persistent maximized>
      <div class=" fit full-height column wrap justify-center items-center content-center"  @click="devModeTap()" >
        <div style="overflow: hidden; position: absolute; top: 0; left: 0; right: 0; bottom: 0; display: flex; align-items: center; justify-content: center; justify-items: center">
          <d-animation :trigger="hideWatingAnimation" :triggerWatch="updateFadeAnimation">
            <d-animation :trigger="showWatingAnimation" :triggerWatch="updateShowWaitAnimation">
              <h1 style="color: white">Warte auf Bild</h1>
            </d-animation>
          </d-animation>
        </div>
      </div>
    </q-dialog>

    <q-dialog v-model="showPreview"  class="clientDialog" persistent maximized  >
      <div   @click="devModeTap()" >
        <q-img :src="`${httpUrl}/${preview.imagePath}`" fit="cover" height="100%" width="100%" />
<!--        <q-fab color="primary" icon="close" direction="up" class="previewFloatButton" v-close-popup-->
<!--               vertical-actions-align="right">-->
<!--        </q-fab>-->
      </div>
      </q-dialog>

    <div style="background-color: #33333333; cursor: no-drop; position: absolute; left: 0px; right: 0px; top: 0px; bottom: 0px; z-index: 999999" v-if="devMode">
      <transition
        appear
        enter-active-class="animated slideInUp"
        leave-active-class="animated slideOutDown">
        <div style="position: absolute; right: 18px; bottom: 18px;" v-if="devMode" >
          <q-fab icon="close" color="primary" @click="devMode=false">Setup-Mode verlassen</q-fab>
          <q-fab color="primary" icon="edit" direction="up" label="Modus"
                 vertical-actions-align="right">
            <q-fab-action color="primary"  label-position="left" label="Auslöser + Countdown + Vorschau" icon="camera" @click="setMode('full')" />
            <q-fab-action color="primary" label-position="left"  label="Auslöser + Countdown" icon="123" @click="setMode('trigger+countdown')" />
            <q-fab-action color="accent"  label-position="left"  label="Countdown + Vorschau" icon="image"  @click="setMode('countdown+preview')" />
            <q-fab-action color="secondary" label-position="left"  label="Nur letztes Bild" icon="image"  @click="setMode('preview')" />
            <q-fab-action color="secondary" label-position="left"  label="aktuelle Gallery Slides" icon="collections" />
          </q-fab>
        </div>
      </transition>
      <transition
        appear
        enter-active-class="animated slideInDown"
        leave-active-class="animated slideOutUp">
        <div style="position: absolute; right: 18px; top: 18px;" v-if="devMode" >
          <q-btn color="primary" rounded icon="fullscreen"  @click="goFullScreen()" ></q-btn>
          <q-btn color="primary" rounded icon="close" label="Client Modus verlassen" @click="leaveClient()" >
          </q-btn>
        </div>
      </transition>
    </div>
  </q-page>
</template>

<script>

import {onMounted, onUnmounted, ref, computed} from "vue";
import {debounce, Notify} from "quasar";
import {useSocketStore} from "stores/socket";
import SnesCountdown from "components/counter/snesCountdown";
import DAnimation from "components/dAnimation";
import {useRouter} from 'vue-router'
import {usePageStore} from "stores/page";
import {storeToRefs} from "pinia/dist/pinia";
import {httpUrl} from "src/composition/urlFix";
import {useSettingsStore} from "stores/settings";

export default {
  name: 'ClientPage',
  components: {DAnimation,
    SnesCountdown
  },
  setup() {

    const socketStore = useSocketStore()
    const settingsStore = useSettingsStore()
    const router = useRouter()
    const pageState = usePageStore()

    const {mode} = storeToRefs(pageState)
    const modes = {
      full: {
        trigger: true,
        countdown: true,
        preview: true,
      },
      'trigger+countdown': {
        trigger: true,
        countdown: true,
        preview: false
      },
      'countdown+preview': {
        trigger: false,
        countdown: true,
        preview: true,
      },
      'preview': {
        trigger: false,
        countdown: false,
        preview: true,
      }
    }
    const modeOptions = ref({})
    const showWaitBetweenCountdownAndPreview = ref(false)

    const randomAnimation = () => {
      const animations = ['flip',  'jackInTheBox', 'jackInTheBox', 'lightSpeedInRight', 'lightSpeedInLeft', 'backInDown', 'backInUp', 'backInLeft', 'backInRight']
      return animations[Math.floor(Math.random()*animations.length)]
    }
    const randomAnimationLeave =  () => {
      const animations = [ 'lightSpeedInRight','hinge','hinge', 'lightSpeedOutLeft', 'backOutDown', 'backOutUp', 'backOutLeft', 'backOutRight', 'fadeOut', 'fadeOut']
      return animations[Math.floor(Math.random()*animations.length)]
    }

    const updateFadeAnimation = ref(0)
    const updateShowWaitAnimation = ref(0)
    const showWatingAnimation = computed(() => { return {animation: randomAnimation(), duration: "slower", updateShowWaitAnimation: updateShowWaitAnimation.value } })
    const hideWatingAnimation = computed( () => { return {animation: randomAnimationLeave(), duration: "slower", updateFadeAnimation: updateFadeAnimation.value} })



    const devCount = ref(0)
    const { devMode } = storeToRefs(pageState)
    const maxCount = 15
    const caption = ref(`Noch ${maxCount - devCount.value} tippen für Einstellungen`)

    const resetDevCount = debounce(() => {
      devCount.value = 0
    },
    10000)
    const devModeTap = function() {

      pageState.goFullScreen()
      devCount.value++
      resetDevCount()


      if(devCount.value === maxCount-10 ) {
        this.notif = Notify.create({caption: caption, timeout: 0, group: false})
      }
      if(devCount.value >= maxCount-10){
        caption.value = `Noch ${maxCount - devCount.value} tippen für Einstellungen`
        this.notif({
          timeout: 200
        })
      }

      if(devCount.value >= maxCount) {
        devMode.value = true
        devCount.value = 0
        return
      }
    }

    const hideDevMode = debounce(() => {
      devMode.value = false
    }, 10000)

    const hideDevModeQuickly = debounce(() => {
      devMode.value = false
    }, 300)

    const clickTrigger = () => {

      pageState.goFullScreen()
      socketStore.emit('trigger')
    }




    const previewImageCounter = ref(0)
    const preview = computed( () => {return {imagePath: 'preview/preview.jpg?tid='+previewImageCounter.value}})
    const showPreview = ref(false)
    socketStore.on('preview', (message) => {
      console.log("got preview from Server")
      // Notify.create({message: `got preview from server: ${message}` })
      showWaitBetweenCountdownAndPreview.value = false
      previewImageCounter.value++
      showPreview.value = true
      preview.value=message
    })

    const showCountdown = ref(false)
    const endOfCountdown = ref({count: 1, animation:'wobble', force: true})
    socketStore.on('countdown', (message) => {
      console.log("got countdown from Server")
      if(modeOptions.value.countdown) {
          showCountdown.value = true
      }
      // Notify.create({message: `got countdown from server: ${message}` })
    })
    socketStore.on('pictureTaken', (message) => {
      console.log("countdown End", parseInt(settingsStore.settings?.camera?.triggerDelay)*-1)
      setTimeout( () => {
        endOfCountdown.value = {count: 2, animation:'heartBeat', speed: "fast", force: true}
      }, parseInt(settingsStore.settings?.camera?.triggerDelay)*-1)
      // showCountdown.value = false
    })
    socketStore.on('countdownEnd', (message) => {

        setTimeout(() => {
          showCountdown.value = false
          showWaitBetweenCountdownAndPreview.value = true
          setTimeout(() => updateShowWaitAnimation.value++, 1)
          setTimeout(() => updateFadeAnimation.value++, 2500)
        }, 1000)
        // endOfCountdown.value.count++
    })


    const showTrigger = ref(false)


    const leaveClient = () => {
      router.push('/')
    }

    onMounted(() => {
      pageState.showHeader = false
      pageState.showMenu = false
      pageState.goFullScreen()


      console.log("reset handle dada?")
      socketStore.on('setClientMode', () => {
        setMode(mode.value)
      })

    })
    onUnmounted(() => {
      pageState.showHeader = true
      pageState.showMenu = true
      pageState.leftDrawerOpen = true
    })



    const setMode = (newMode) => {
      modeOptions.value = modes[newMode]
      mode.value = newMode
      console.log(mode.value)
      switch(mode.value) {
        case 'full':
          showTrigger.value = true
          showCountdown.value = false
          showPreview.value = false
          break;
        case 'trigger+countdown':
          showTrigger.value = true
          showCountdown.value = false
          showPreview.value = false
          break;
        case 'countdown+preview':
          showTrigger.value = false
          showCountdown.value = false
          showPreview.value = false
          break;
        case 'preview':
          showTrigger.value = false
          showCountdown.value = false
          showPreview.value = true
          break;
      }
    }
    setMode(mode.value)

    return {
      modes,
      mode,
      setMode,
      devModeTap,
      devMode,
      hideDevMode,
      hideDevModeQuickly,
      clickTrigger,
      showPreview,
      preview,
      showCountdown,
      endOfCountdown,
      showTrigger,
      showWaitBetweenCountdownAndPreview,
      showWatingAnimation,
      hideWatingAnimation,
      updateFadeAnimation,
      updateShowWaitAnimation,
      leaveClient,
      goFullScreen: pageState.goFullScreen,
      httpUrl

    }
  }
}
</script>

<style lang="scss">
.card-storage{
  background-color: #2c343c;
  color: #f0f0f0;
}

.clientPage {
  height: calc(100vh - 50px);
  background-color: $grey-9;
}

.clientDialog {
  background-color: $grey-9
}

.previewFloatButton {
  position: absolute;
  right: 18px;
  bottom: 18px;
}
.trigger {
  height: 8em;
  width: 8em;
  .q-icon {
    font-size: 5em;
  }
}
</style>
