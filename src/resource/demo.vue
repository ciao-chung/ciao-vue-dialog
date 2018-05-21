<template>
  <div data-role="demo">
    <h1>Ciao Vue Dialog</h1>

    <button @click="base">base</button>

    <button @click="withoutAnyButton">withoutAnyButton</button>
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
  methods: {
    base() {
      this.$dialog('base')
    },
    withoutAnyButton() {
      this.$dialog({
        title: 'foo',
        content: 'bar...',
        size: 'lg',
        accept: {
          hide: true,
        },
        dismiss: {
          hide: true,
        },
      })
    },
  },
}
</script>

<style src="bootstrap/dist/css/bootstrap.min.css"></style>
<style lang="sass" type="sass/text" scoped>
div[data-role="demo"]
</style>