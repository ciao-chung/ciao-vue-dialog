<template>
  <div data-role="demo">
    <h1>Ciao Vue Dialog</h1>

    <button @click="triggerDialog">triggerDialog</button>
    <VueDialog/>
  </div>
</template>

<script>
import Vue from 'vue'
import Dialog from 'src/index.js'
Vue.use(Dialog)
export default {
  data() {
    return {
    }
  },
  mounted() {
    this.$nextTick(this.triggerDialog)
  },
  updated() {
    this.triggerDialog()
  },
  methods: {
    triggerDialog() {
      this.$dialog({
        title: 'foobar',
        size: 'lg',
      })
    },
  },
}
</script>

<style src="bootstrap/dist/css/bootstrap.min.css"></style>
<style lang="sass" type="sass/text" scoped>
div[data-role="demo"]
</style>