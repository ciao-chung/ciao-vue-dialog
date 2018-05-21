<template>
  <div ciao-vue-dialog="dialog-wrap" :active="active">
    <div ciao-vue-dialog="overlay" :active="active" @click="close"></div>

    <Dialog
      @close="close"
      :active="active"
      :config="config" />
  </div>
</template>

<script>
import { events } from 'Components/events'
import Dialog from 'Components/Dialog/Dialog.vue'
export default {
  data() {
    return {
      active: false,
      config: {},
    }
  },
  created() {
    events.$on('dialog', this.onActive)
  },
  methods: {
    init(options) {
      this.setConfigAsDefault()

      if(typeof options == 'string') {
        this.config.title = options
        return
      }

      this.config.title = options.title
      this.config.content = options.content || null
      this.config.size = options.size || 'md'
      this.config.component = options.component || null

      this.setAccept(options.accept)
      this.setDismiss(options.dismiss)
    },
    setAccept(config) {
      if(!config) {
        this.config.accept = null
        return
      }

      this.config.accept = {
        label: config.label || 'Accept',
        style: config.style || 'primary',
        callback: config.callback || null,
      }
    },
    setDismiss(config) {
      if(!config) {
        this.config.dismiss = null
        return
      }

      this.config.dismiss = {
        label: config.label || 'Dismiss',
        style: config.style || 'light',
        callback: config.callback || null,
      }
    },
    setConfigAsDefault() {
      this.config = {
        title: null,
        content: null,
      }
    },
    onActive(options) {
      this.init(options)
      this.active = true
    },
    close() {
      this.active = false
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
  components: {
    Dialog,
  },
}
</script>

<style src="animate.css/animate.css"></style>
<style lang="sass" type="text/sass" scoped>
$transition-time: 0.5s
div[ciao-vue-dialog="dialog-wrap"]
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
</style>