<template>
      <span :class="animationClass['click']" @click="animateCheck('click')" >
      <span :class="animationClass['hover']" @mouseenter="animateCheck('hover')" >
      <span :class="animationClass['trigger']"  >
      <slot  />
    </span>
    </span>
    </span>
</template>

<script>

import 'animate.css'

export default
{
  name: 'dAnimation',
  // props: [
  //   'animation',
  //   'trigger',
  //   'init',
  //   'persistent',
  //   'hover',
  //   'duration'
  //
  // ],
  props: {
    hover: Object,
    click: Object,
    trigger: Object,
    triggerWatch: Number
  },
  data() {return {
    animation: '',
    baseClass: 'animate__animated animate__',
    types: ['click', 'hover', 'trigger'],
    forceAnimate: {click: false, hover: false, trigger: false},
    stopAnimationTimer: {click: undefined, hover: undefined, trigger: undefined},
    defaultDurations: {default: 1000, slow: 2000, slower: 3000, fast: 800, faster: 500}
  }},
  mounted() {
    if(this.init===true)
      this.animate()
  },
  beforeUnmount() {
    // this.animate()
  },
  computed: {
    animationClass() {
      const animateClasses = {}
      for(const type of this.types) {
        animateClasses[type] = (this.forceAnimate[type])?`danimation ${this.baseClass}${this[type].animation} animate__${this[type].duration||''}`:''
      }
      return animateClasses
    },
  },
  watch: {
    trigger(val) {
      this.animate("trigger")
    },
    triggerWatch(val) {
      this.animateCheck('trigger')
    }
  },
  emits: ['update'],
  methods: {
    animate(type) {
      console.log("animate!", type)
      this.forceAnimate[type] = false
      setTimeout(() => {
        this.forceAnimate[type] = true
        if(this.stopAnimationTimer[type]) { clearTimeout(this.stopAnimationTimer[type])}
        this.stopAnimationTimer[type] = setTimeout(() => {
          this.forceAnimate[type] = this.persistent||false
        }, this.defaultDurations[this[type]?.duration||'default'])
      },10)
    },
    animateCheck(type) {
      if(this[type])
        if(this[type].animation) {
          this.animate(type)
        }
    }

  }
}
</script>

<style scoped>

span.danimation.animate__animated {
  display: inline-block;
}

</style>
