<template>
  <div ciao-vue-dialog="dialog" :class="dialogClass" v-if="active" :size="config.size">
    <div ciao-vue-dialog="close-button" @click="close">
      &times;
    </div>

    <!--title-->
    <div ciao-vue-dialog="title" :class="config.style">
      {{config.title}}
    </div>

    <!--body-->
    <div ciao-vue-dialog="body" v-if="hasBody">
      <div v-if="config.content">{{config.content}}</div>

      <component
        v-if="config.component"
        @commitAccept="onAccept"
        @commitDismiss="onDismiss"
        @updateData="updateData"
        :meta="meta"
        :data="data"
        :is="config.component" />
    </div>

    <!--footer-->
    <div ciao-vue-dialog="footer" v-if="hasFooter">
      <button class="btn"
        v-if="config.accept"
        @click="onAccept"
        :class="'btn-'+config.accept.style">
        {{config.accept.label}}
      </button>

      <button class="btn"
        v-if="config.dismiss"
        @click="onDismiss"
        :class="'btn-'+config.dismiss.style">
        {{config.dismiss.label}}
      </button>
    </div>
  </div>
</template>

<script>
import { events } from 'Components/events'
export default {
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    config: {
      type: Object,
      default: () => {
        return {}
      },
    },
    meta: {
      default: null,
    },
    data: {
      default: null,
    },
  },
  data() {
    return {
      size: {
        lg: 800,
        md: 500,
        sm: 300,
      },
    }
  },
  created() {
    $(window).resize(() => this.setupMobileWidth())
  },
  methods: {
    setupMobileWidth() {
      if(!this.active) return
      const browserWidth = $(window).width()
      const dialogExpectsWidth = this.size[this.config.size]
      const isMobileMode = browserWidth*0.8 <= dialogExpectsWidth
      const dialogWidth = !isMobileMode ? dialogExpectsWidth : browserWidth*0.8
      $(this.$el)
        .width(dialogWidth)
        .css({
          left: browserWidth*0.5 - dialogWidth/2
        })
    },
    onAccept() {
      this.close()
      if(!this.config.accept) return
      if(!(this.config.accept.callback instanceof Function)) return
      this.config.accept.callback(this.data)
    },
    onDismiss() {
      this.close()
      if(!this.config.dismiss) return
      if(!(this.config.dismiss.callback instanceof Function)) return
      this.config.dismiss.callback(this.data)
    },
    close() {
      this.$emit('close')
    },
    updateData(data) {
      this.$emit('updateData', data)
    },
  },
  computed: {
    dialogClass() {
      return {
        animated: this.active,
        bounceIn: this.active,
      }
    },
    hasBody() {
      if(this.config.content) return true
      if(this.config.component) return true
      return false
    },
    hasFooter() {
      if(this.config.accept) return true
      if(this.config.dismiss) return true
      return false
    },
  },
  watch: {
    active() {
      if(!this.active) return
      this.$nextTick(this.setupMobileWidth)
    },
  },
}
</script>

<style src="animate.css/animate.css"></style>
<style lang="sass" type="text/sass" scoped>
$transition-time: 0.5s
$border-color: #b3b3b3
$size-list: ('lg': 800px, 'md': 500px, 'sm': 300px)
@mixin setPosition($width)
  position: absolute
  top: 100px
  left: calc(50vw - #{$width}/2)
div[ciao-vue-dialog="dialog"]
  @include setPosition(map-get($size-list, 'md'))
  width: map-get($size-list, 'md')
  border: 1px $border-color solid
  min-height: 100px
  border-radius: 4px
  background-color: white
  padding: 20px
  @each $sizeName, $size in $size-list
    &[size="#{$sizeName}"]
      @include setPosition(map-get($size-list, $sizeName))
      width: $size
      max-width: 80vw

  div[ciao-vue-dialog="close-button"]
    position: absolute
    top: 0
    right: 0
    font-size: 20px
    padding: 10px
    cursor: pointer
  div[ciao-vue-dialog="title"]
    padding: 10px 0
    font-weight: bolder
    font-size: 26px
    color: #565656
    &.success
      color: #4cae4c
    &.primary
      color: #2e6da4
    &.info
      color: #5bc0de
    &.warning
      color: #f0ad4e
    &.danger
      color: #d9534f

  div[ciao-vue-dialog="body"]
    border-top: 1px $border-color solid
    padding: 20px 0

  div[ciao-vue-dialog="footer"]
    padding-top: 20px
    border-top: 1px $border-color solid
    display: flex
    justify-content: flex-end
    &>*
      margin-right: 10px
</style>