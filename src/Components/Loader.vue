<template>
  <div class="loader"><div></div><div></div><div></div><div></div></div>
</template>

<script lang="babel" type="text/babel">
export default {
  data() {
    return {}
  },
  created() {},
}
</script>

<style lang="sass" type="text/sass" scoped>
$size: 40px
.loader
  display: inline-block
  position: relative
  width: $size
  height: $size
  div
    position: absolute
    top: 27px
    width: 11px
    height: 11px
    border-radius: 50%
    background: #a3a3a3
    animation-timing-function: cubic-bezier(0, 1, 1, 0)
    &:nth-child(1)
      left: 6px
      animation: loader1 0.6s infinite
    &:nth-child(2)
      left: 6px
      animation: loader2 0.6s infinite
    &:nth-child(3)
      left: 26px
      animation: loader2 0.6s infinite
    &:nth-child(4)
      left: 45px
      animation: loader3 0.6s infinite

@keyframes loader1
  0%
    transform: scale(0)

  100%
    transform: scale(1)


@keyframes loader3
  0%
    transform: scale(1)

  100%
    transform: scale(0)


@keyframes loader2
  0%
    transform: translate(0, 0)

  100%
    transform: translate(19px, 0)
</style>