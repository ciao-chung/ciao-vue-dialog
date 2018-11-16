<template>
  <div ciao-vue-dialog="dialog" :class="dialogClass" v-if="active" :size="config.size">
    <div ciao-vue-dialog="close-button" @click="close">
      &times;
    </div>

    <!--title-->
    <div ciao-vue-dialog="title" :class="config.style">
      <span>{{config.title}}</span>
      <ComponentLoader v-if="loading"></ComponentLoader>
    </div>

    <!--body-->
    <div ciao-vue-dialog="body" v-if="hasBody">
      <div v-if="config.content">{{config.content}}</div>

      <component
        v-if="config.component"
        @setLoader="setLoader"
        @commitAccept="onAccept"
        @commitDismiss="onDismiss"
        @updateData="updateData"
        :loading="loading"
        :meta="meta"
        :error="error"
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
import ComponentLoader from 'Components/Loader.vue'
import { events } from 'Components/events'
import 'jquery-mousewheel'
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
      loading: false,
      error: null,
    }
  },
  created() {
    $(window).resize(() => this.setupMobileWidth())
  },
  mounted() {
    this.setupScroll()
  },
  methods: {
    setupScroll() {
      const $dialog = $(this.$el)
      if(!this.active) {
        $dialog.unbind('mousewheel')
        return
      }
      // const scrollHeight = $dialog.get(0).scrollHeight
      $dialog.bind('mousewheel', function(event, direction) {
        const height = $dialog.height()                     // dialog高度
        const scrollHeight = $dialog.get(0).scrollHeight    // dialog內的實際高度(包含overflow)
        const padding = 20*2

        // 往上滑
        if((this.scrollTop === (scrollHeight - height) && direction < 0) || (this.scrollTop === 0 && direction > 0)) {
          event.preventDefault()
        }

        // 往下滑(後面3px是為了滑動時的小誤差)
        else if ((this.scrollTop+height+padding >= scrollHeight-3) && direction < 0) {
          event.preventDefault()
        }
      })
    },
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
    async onAccept() {
      try {
        await this.handle('accept')
        this.close()
      } catch (error) {
        console.error(error)
      }
    },
    async onDismiss() {
      await this.handle('dismiss')
      this.close()
    },
    async handle(type) {
      if(!this.config[type]) return
      if(!(this.config[type].callback instanceof Function)) return
      this.setLoader(true)
      try {
        await this.config[type].callback(this.data)
        this.setLoader(false)
      } catch(error) {
        this.setLoader(false)
        this.error = error
        throw error
      }
    },
    close() {
      this.$emit('close')
      this.reset()
    },
    updateData(data) {
      this.$emit('updateData', data)
    },
    setLoader(value) {
      this.loading = !!value
    },
    reset() {
      this.setLoader(false)
      this.error = null
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
      this.reset()
      this.$nextTick(() => {
        this.setupMobileWidth()
        this.setupScroll()
      })
    },
  },
  components: {
    ComponentLoader,
  },
}
</script>

<style src="animate.css/animate.css"></style>
<style lang="sass" type="text/sass" scoped>
$transition-time: 0.5s
$border-color: #b3b3b3
$size-list: ('lg': 800px, 'md': 500px, 'sm': 300px)
$top: 60px
@mixin setPosition($width)
  position: absolute
  top: $top
  left: calc(50vw - #{$width}/2)
  max-height: calc(90vh - #{$top})
  overflow: auto
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