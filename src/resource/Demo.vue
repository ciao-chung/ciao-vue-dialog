<template>
  <div data-role="demo">
    <h1>Ciao Vue Dialog</h1>

    <button @click="base">Base</button>

    <button @click="large">Large</button>

    <button @click="small">Small</button>

    <button @click="acceptDismiss">Accept/Dismiss</button>

    <button @click="customComponent">Custom Component</button>

    <VueDialog/>
  </div>
</template>

<script>
import Vue from 'vue'
import CustomComponent from 'resource/CustomComponent'
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
    acceptDismiss() {
      this.$dialog({
        title: 'Accept/Dismiss',
        accept: {
          callback: () => {
            alert('after accept')
          },
        },
        dismiss: {
          callback: () => {
            alert('after dismiss')
          },
        },
      })
    },
    customComponent() {
      this.$dialog({
        title: 'Custom Component',
        size: 'lg',
        component: CustomComponent,
      })
    },
  },
}
</script>

<style src="bootstrap/dist/css/bootstrap.min.css"></style>
<style lang="sass" type="sass/text" scoped>
div[data-role="demo"]
</style>