<template>
  <q-page style="background-color: #ffffff;">
    <div class="full-width  q-pa-lg"  style="max-height: calc(100vh - 50px); overflow: auto;" >
      <div>
        <h4>{{currentGallery.name}}<br> <small>({{currentGallery.photos}} Fotos)</small></h4>
      </div>
      <q-card >
        <q-card-section class="row wrap q-gutter-lg">
        <div  v-for="(src, index) in galleryImagesSrcThumbnails" :key="index" style="cursor: pointer; position: relative"  @click=" () => showImg(index)">
          <span style="position: absolute; top:0.5em; left: 0.5em; background-color: #33333388; color: #ffffff; padding: 0.5em; font-weight: bold">{{index}}</span>
          <img  :src="src"  />
<!--          {{src}}-->
        </div>
        </q-card-section>
      </q-card>
      <vue-easy-lightbox :visible="visibleRef" :imgs="galleryImagesSrc" :index=indexRef @hide="onHideImg"></vue-easy-lightbox>
    </div>
  </q-page>
</template>

<script>

import { ref, computed } from "vue"
import {useGalleryStore} from "stores/gallery";
import {storeToRefs} from "pinia";
import VueEasyLightbox from "vue-easy-lightbox"
import {httpUrl} from "src/composition/urlFix";

export default {
  name: 'SettingsPage',
  components: {VueEasyLightbox},
  setup() {

    const galleryStore = useGalleryStore()
    const {currentGallery, galleryImages} = storeToRefs(galleryStore)
    galleryStore.requestGallery()
    galleryStore.requestGalleryImages()

    const galleryImagesSrcThumbnails = computed( () => {
      if(currentGallery.value.id)
        return galleryImages.value.map( gi => `${httpUrl}/${currentGallery.value.id}/thumbnails/${gi}` )
      return []
    })
    const galleryImagesSrc= computed( () => {
      if(currentGallery.value.id)
        return galleryImages.value.map( gi => `${httpUrl}/${currentGallery.value.id}/preview/${gi}` )
      return []
    })

    const visibleRef = ref(false)
    const indexRef = ref(0)
    const showImg = (index) => {
      console.log(index)
      indexRef.value = index
      visibleRef.value = true
    }

    const onHideImg = () => visibleRef.value = false
    return {
      visibleRef,
      showImg,
      onHideImg,
      indexRef,
      currentGallery,
      galleryImages,
      galleryImagesSrcThumbnails,
      galleryImagesSrc
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
