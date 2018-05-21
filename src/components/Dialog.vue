<template>
  <div ciao-vue-dialog="dialog" :active="active">
    <div ciao-vue-dialog="overlay" :active="active" @click="close"></div>

    <div ciao-vue-dialog="main" :class="dialogClass">
      main
    </div>
  </div>
</template>

<script>
import { events } from 'components/events'
export default {
  data() {
    return {
      active: false,
    }
  },
  created() {
    events.$on('dialog', this.onActive)
  },
  methods: {
    onActive(options) {
      this.active = true
      console.warn('on active', options)
    },
    close() {
      this.active = false
      console.warn('close...')
    },
  },
  computed: {
    dialogClass() {
      return {
        animated: this.active,
        bounceIn: this.active,
      }
    },
  },
  components: {},
}
</script>

<style src="animate.css/animate.css"></style>
<style lang="sass" type="text/sass" scoped>
$transition-time: 0.5s
@mixin setPosition($width)
  position: absolute
  top: 50vh
  left: calc(50vw - #{$width}/2)
div[ciao-vue-dialog="dialog"]
  pointer-events: none
  position: fixed
  top: 0
  left: 0
  z-index: 1000
  &[active]
    pointer-events: auto
  div[ciao-vue-dialog="overlay"]
    top: 0
    left: 0
    background-color: transparent
    transition: all $transition-time ease
    width: 300vw
    height: 300vh
    &[active]
      background-color: rgba(0, 0, 0, 0.5)
      transition: all $transition-time ease
  div[ciao-vue-dialog="main"]
    @include setPosition(240px)
    width: 240px
    height: 60px
    border-radius: 4px
    background-color: white
</style>