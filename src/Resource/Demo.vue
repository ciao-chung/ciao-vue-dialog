<template>
  <div data-role="demo">
    <h1>Ciao Vue Dialog</h1>

    <div class="block">
      <button class="btn btn-light btn-sm" @click="base">Base</button>
    </div>

    <div class="block">
      <button class="btn btn-light btn-sm" @click="large">Large</button>
    </div>

    <div class="block">
      <button class="btn btn-light btn-sm" @click="small">Small</button>
    </div>

    <div class="block">
      <button class="btn btn-light btn-sm" @click="acceptDismiss">Accept/Dismiss</button>
    </div>

    <div class="block">
      <button class="btn btn-light btn-sm" @click="normalcustomComponent">Custom Component(Normal)</button>
    </div>

    <div class="block">
      <button class="btn btn-light btn-sm" @click="formCustomComponent">Custom Component(Form)</button>
    </div>
    
    <VueDialog/>
  </div>
</template>

<script>
import Vue from 'vue'
import NormalCustomComponent from 'Resource/CustomComponent/Normal'
import FormCustomComponent from 'Resource/CustomComponent/Form'
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
          callback() {
            alert('after accept')
          },
        },
        dismiss: {
          callback() {
            alert('after dismiss')
          },
        },
      })
    },
    normalcustomComponent() {
      this.$dialog({
        title: 'Custom Component',
        size: 'lg',
        component: NormalCustomComponent,
      })
    },
    formCustomComponent() {
      this.$dialog({
        title: 'Send Product Menu',
        size: 'lg',
        component: FormCustomComponent,
        accept: {
          label: 'Send',
          callback(data) {
            if(!data) return
            alert(`We had sent email to ${data}`)
          }
        },
      })
    },
  },
}
</script>

<style src="bootstrap/dist/css/bootstrap.min.css"></style>
<style lang="sass" type="sass/text" scoped>
div[data-role="demo"]
  .block
    margin: 20px
</style>