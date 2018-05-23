<template>
  <div data-role="demo">
    <!--Base-->
    <div class="block">
      <BaseExample/>
    </div>

    <!--Style-->
    <div class="block">
      <StyleExample/>
    </div>

    <!--Size-->
    <div class="block">
      <SizeExample/>
    </div>

    <!--Accept/Dismiss-->
    <div class="block">
      <ActionExample/>
    </div>

    <!--Custom Component-->
    <div class="block">
      <CustomComponentExample/>
    </div>

    <VueDialog/>
  </div>
</template>

<script>
import Prismjs from 'prismjs'
import PrismjsLoadLanguages from 'prismjs/components/index.js'
import BaseExample from 'Resource/Example/Base/Base.vue'
import SizeExample from 'Resource/Example/Size/Size.vue'
import ActionExample from 'Resource/Example/Action/Action.vue'
import StyleExample from 'Resource/Example/Style/Style.vue'
import CustomComponentExample from 'Resource/Example/CustomeComponent/CustomeComponent.vue'

import Vue from 'vue'
import Dialog from 'src/index.js'
Vue.use(Dialog)
export default {
  mounted() {
    this.highlightSnippet()
  },
  updated() {
    this.highlightSnippet()
  },
  methods: {
    highlightSnippet() {
      this.$nextTick(() => {
        PrismjsLoadLanguages(['javascript', 'php', 'sass', 'scss', 'bash'])
        Prismjs.highlightAll()
      })
    },
  },
  components: {
    BaseExample,
    StyleExample,
    SizeExample,
    ActionExample,
    CustomComponentExample,
  },
}
</script>

<style src="bootstrap/dist/css/bootstrap.min.css"></style>
<style src="prismjs/themes/prism.css"></style>
<style lang="sass" type="sass/text">
div[data-role="demo"]
  .block
    padding: 20px
    margin-bottom: 50px
  .markdown-container
    padding: 20px 0
</style>