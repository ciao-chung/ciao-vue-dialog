import Main from './Main'
import Vue from 'vue'
import { events } from 'Components/events'

class Installer {
  constructor() {
    this.isInstalled = false
  }
  install(Vue, options) {
    if(this.isInstalled) return

    this.isInstalled = true
    Vue.component('VueDialog', Main)

    Vue.prototype.$dialog = (options) => {
      events.$emit('dialog', options)
    }
  }
}

export default new Installer()