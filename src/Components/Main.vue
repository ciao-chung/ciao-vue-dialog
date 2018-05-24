<template>
  <div ciao-vue-dialog="dialog-wrap" :active="active">
    <div ciao-vue-dialog="overlay" :active="active" @click="close"></div>

    <ComponentDialog
      ref="dialog"
      @updateData="updateData"
      @close="close"
      :meta="meta"
      :data="data"
      :active="active"
      :config="config" />
  </div>
</template>

<script>
import { events } from 'Components/events'
import ComponentDialog from 'Components/Dialog/Dialog.vue'
export default {
  props: {
    zIndex: {
      default: 1000,
    },
  },
  data() {
    return {
      active: false,
      config: {},
      meta: null,
      data: null,
      closeTimeout: null,
    }
  },
  created() {
    events.$on('dialog', this.onActive)
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      $('div[ciao-vue-dialog="dialog-wrap"]').css({
        'z-index': this.zIndex
      })
    },
    initOptions(options) {
      this.setConfigAsDefault()
      this.meta = options.meta || null
      this.data = options.data || null

      if(typeof options == 'string') {
        this.config.title = options
        this.config.size = 'md'
        return
      }

      this.config.title = options.title
      this.config.style = options.style || null
      this.config.content = options.content || null
      this.config.size = options.size || 'md'
      this.config.close = !isNaN(options.close) ? options.close : false
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
        commitOnEnter: config.commitOnEnter || false,
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
        commitOnEsc: config.commitOnEsc || false,
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
      this.initOptions(options)
      this.active = true
      this.handleTimeout()
      window.addEventListener('keydown', this.setupKeyEvent)
    },
    handleTimeout() {
      clearTimeout(this.closeTimeout)
      if(!this.config.close) return
      this.closeTimeout = setTimeout(this.close , this.config.close)
    },
    close() {
      this.active = false
      window.removeEventListener('keydown', this.setupKeyEvent)
    },
    setupKeyEvent(event) {
      if(this.config.accept) {
        if(this.config.accept.commitOnEnter && event.which == 13) this.$refs.dialog.onAccept()
      }

      if(this.config.dismiss) {
        if(this.config.dismiss.commitOnEsc && event.which == 27) this.$refs.dialog.onDismiss()
      }
    },
    updateData(data) {
      this.data = data
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
    ComponentDialog,
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