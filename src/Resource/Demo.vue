<template>
  <div data-role="demo">
    <!--Base-->
    <div class="block">
      <h2>Base</h2>
      <button class="btn btn-info btn-sm" @click="base">Base</button>

      <div class="row">
        <div class="col-sm-6 col-md-4 col-lg-3">
          <div class="markdown-container">
            <BaseExample/>
          </div>
        </div>
      </div>
    </div>

    <!--Style-->
    <div class="block">
      <h2>Style</h2>

      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <button class="btn btn-success btn-sm" @click="style('success')">success</button>
          <button class="btn btn-primary btn-sm" @click="style('primary')">primary</button>
          <button class="btn btn-info btn-sm" @click="style('info')">info</button>
          <button class="btn btn-warning btn-sm" @click="style('warning')">warning</button>
          <button class="btn btn-danger btn-sm" @click="style('danger')">danger</button>
        </div>

        <div class="col-sm-6 col-md-4 col-lg-3">
          <div class="markdown-container">
            <StyleExample/>
          </div>
        </div>
      </div>
      <div>

      </div>
    </div>

    <!--Size-->
    <div class="block">
      <h2>Size</h2>

      <div class="row">
        <div class="col-sm-6 col-md-4 col-lg-3">
          <button class="btn btn-info btn-sm" @click="large">Large</button>

          <div class="markdown-container">
            <LargeExample/>
          </div>
        </div>


        <div class="col-sm-6 col-md-4 col-lg-3">
          <button class="btn btn-info btn-sm" @click="small">Small</button>

          <div class="markdown-container">
            <SmallExample/>
          </div>
        </div>
      </div>
    </div>

    <!--Accept/Dismiss-->
    <div class="block">
      <h2>Accept/Dismiss</h2>
      <button class="btn btn-info btn-sm" @click="acceptDismiss">Accept/Dismiss</button>

      <div class="row">
        <div class="col-sm-6 col-md-4 col-lg-3">
          <div class="markdown-container">
            <AcceptDismissExample/>
          </div>
        </div>
      </div>
    </div>

    <!--Custom Component-->
    <div class="block">
      <h2>Custom Component</h2>
      <div class="row">
        <div class="col-sm-6 col-md-4 col-lg-3">
          <button class="btn btn-info btn-sm" @click="normalCustomComponent">Normal</button>

          <div class="markdown-container">
            <NormalCustomComponentExample/>
          </div>
        </div>

        <div class="col-sm-6 col-md-4 col-lg-3">
          <button class="btn btn-info btn-sm" @click="formCustomComponent">Form</button>

          <div class="markdown-container">
            <FormCustomComponentComponentExample/>
          </div>
        </div>
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
import StyleExample from 'Resource/Example/Style.md'
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
    style(style) {
      this.$dialog({
        title: style,
        style,
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
    StyleExample,
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
    padding: 20px
    margin-bottom: 50px
  .markdown-container
    padding: 20px 0
</style>