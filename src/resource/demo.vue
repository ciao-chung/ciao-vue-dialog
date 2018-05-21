<template>
  <div data-role="demo">
    <h1>Ciao Vue Dialog</h1>

    <button @click="base">Base</button>

    <button @click="large">Large</button>
    <button @click="small">Small</button>

    <button @click="withoutAnyButton">Without Any Button</button>

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
    large() {
      this.$dialog({
        title: 'Large Size',
        size: 'lg',
      })
    },
    small() {
      this.$dialog({
        title: 'Small Size',
        size: 'sm',
      })
    },
    withoutAnyButton() {
      this.$dialog({
        title: 'foo',
        content: 'bar...',
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