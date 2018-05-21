<template>
  <div ciao-vue-dialog="dialog" :class="dialogClass" v-if="active" :size="config.size">

    <div ciao-vue-dialog="title">
      {{config.title}}
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

  },
  computed: {
    dialogClass() {
      return {
        animated: this.active,
        bounceIn: this.active,
      }
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

  div[ciao-vue-dialog="title"]
    padding: 10px 0
    font-weight: bolder
    font-size: 26px
    border-bottom: 1px $border-color solid

  div[ciao-vue-dialog="body"]
</style>