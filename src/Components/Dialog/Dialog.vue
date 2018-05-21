<template>
  <div ciao-vue-dialog="dialog" :class="dialogClass" v-if="active" :size="config.size">
    <div ciao-vue-dialog="close-button" @click="close">
      &times;
    </div>

    <!--title-->
    <div ciao-vue-dialog="title">
      {{config.title}}
    </div>

    <!--body-->
    <div ciao-vue-dialog="body" v-if="hasBody">
      <div v-if="config.content">{{config.content}}</div>

      <component
        v-if="config.component"
        :is="config.component" />
    </div>

    <!--footer-->
    <div ciao-vue-dialog="footer" v-if="hasFooter">
      <button class="btn" :class="'btn-'+config.accept.style" v-if="config.accept">
        {{config.accept.label}}
      </button>

      <button class="btn" :class="'btn-'+config.dismiss.style" v-if="config.dismiss">
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
  },
  created() {
  },
  methods: {
    close() {
      this.$emit('close')
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
  components: {},
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