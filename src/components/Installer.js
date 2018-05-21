import Dialog from './Dialog'
import Vue from 'vue'
import { events } from 'components/events'

class Installer {
  constructor() {
    this.isInstalled = false
  }
  install(Vue, options) {
    if(this.isInstalled) return

    this.isInstalled = true
    Vue.component('VueDialog', Dialog)

    Vue.prototype.$dialog = (options) => {
      events.$emit('dialog', options)
    }
  }
}

export default new Installer()