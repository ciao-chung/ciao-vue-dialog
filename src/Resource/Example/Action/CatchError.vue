<template>
  <div>
    Error: {{error}}
  </div>
</template>

<script>
export default {
  props: {
    error: {
      default: () => null,
    },
  },
}
</script>

<style lang="sass" type="sass/text" scoped></style>