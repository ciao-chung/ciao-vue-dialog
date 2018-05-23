<template>
  <div data-role="demo">
    <!--Base-->
    <div class="block" block="base">
      <BaseExample/>
    </div>

    <!--Style-->
    <div class="block" block="style">
      <StyleExample/>
    </div>

    <!--Size-->
    <div class="block" block="size">
      <SizeExample/>
    </div>

    <!--Accept/Dismiss-->
    <div class="block" block="action">
      <ActionExample/>
    </div>

    <!--Custom Component-->
    <div class="block" block="custom-component">
      <CustomComponentExample/>
    </div>

    <VueDialog :zIndex="3000"/>
  </div>
</template>

<script>
import jump from 'jump.js'
import Prismjs from 'prismjs'
import PrismjsLoadLanguages from 'prismjs/components/index.js'
import BaseExample from 'Resource/Example/Base/Base.vue'
import SizeExample from 'Resource/Example/Size/Size.vue'
import ActionExample from 'Resource/Example/Action/Action.vue'
import StyleExample from 'Resource/Example/Style/Style.vue'
import CustomComponentExample from 'Resource/Example/CustomeComponent/CustomeComponent.vue'

import Vue from 'vue'
import Dialog from 'src/index.js'
import 'bootstrap/dist/js/bootstrap.js'
Vue.use(Dialog)
export default {
  data() {
    return {
      navHeight: 56,
    }
  },
  mounted() {
    this.highlightSnippet()
    this.scrollToBlock()
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
    scrollToBlock() {
      const block = this.$route.query.block
      if(!block) return
      const $block = $(`.block[block="${block}"]`)
      jump('div#app', {
        duration: 1000,
        offset: $block.offset().top - this.navHeight,
        a11y: false,
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
  watch: {
    $route() {
      this.scrollToBlock()
    },
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