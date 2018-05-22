<template>
  <div data-role="demo">
    <h1>Ciao Vue Dialog</h1>

    <div class="block">
      <button class="btn btn-info btn-sm" @click="base">Base</button>

      <div class="markdown-container">
        <BaseExample/>
      </div>
    </div>

    <div class="block">
      <button class="btn btn-info btn-sm" @click="large">Large</button>

      <div class="markdown-container">
        <LargeExample/>
      </div>
    </div>

    <div class="block">
      <button class="btn btn-info btn-sm" @click="small">Small</button>

      <div class="markdown-container">
        <SmallExample/>
      </div>
    </div>

    <div class="block">
      <button class="btn btn-info btn-sm" @click="acceptDismiss">Accept/Dismiss</button>

      <div class="markdown-container">
        <AcceptDismissExample/>
      </div>
    </div>

    <div class="block">
      <button class="btn btn-info btn-sm" @click="normalCustomComponent">Custom Component(Normal)</button>

      <div class="markdown-container">
        <NormalCustomComponentExample/>
      </div>
    </div>

    <div class="block">
      <button class="btn btn-info btn-sm" @click="formCustomComponent">Custom Component(Form)</button>

      <div class="markdown-container">
        <FormCustomComponentComponentExample/>
      </div>
    </div>

    <VueDialog/>
  </div>
</template>

<script>
import Prismjs from 'prismjs'
import PrismjsLoadLanguages from 'prismjs/components/index.js'
import NormalCustomComponent from 'Resource/CustomComponent/Normal'
import FormCustomComponent from 'Resource/CustomComponent/Form'
import BaseExample from 'Resource/Example/Base.md'
import LargeExample from 'Resource/Example/Large.md'
import SmallExample from 'Resource/Example/Small.md'
import AcceptDismissExample from 'Resource/Example/AcceptDismiss.md'
import NormalCustomComponentExample from 'Resource/Example/NormalCustomComponent.md'
import FormCustomComponentComponentExample from 'Resource/Example/FormCustomComponent.md'

import Vue from 'vue'
import Dialog from 'src/index.js'
Vue.use(Dialog)
export default {
  mounted() {
    this.highlightSnippet()
  },
  methods: {
    highlightSnippet() {
      this.$nextTick(() => {
        PrismjsLoadLanguages(['javascript', 'php', 'sass', 'scss', 'bash'])
        Prismjs.highlightAll()
      })
    },
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
    normalCustomComponent() {
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
  components: {
    BaseExample,
    LargeExample,
    SmallExample,
    AcceptDismissExample,
    NormalCustomComponentExample,
    FormCustomComponentComponentExample,
  },
}
</script>

<style src="bootstrap/dist/css/bootstrap.min.css"></style>
<style src="prismjs/themes/prism.css"></style>
<style lang="sass" type="sass/text" scoped>
div[data-role="demo"]
  .block
    margin: 20px
  .markdown-container
    padding: 20px 0
</style>