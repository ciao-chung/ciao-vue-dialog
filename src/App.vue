<template>
  <div id="app">
    <ComponentNav/>
    <router-view/>
  </div>
</template>

<script>
import ComponentNav from 'Resource/Nav'
export default {
  name: 'app',
  components: {
    ComponentNav,
  },
}
</script>

<style lang="sass" type="text/sass"></style>