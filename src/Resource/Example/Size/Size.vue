<template>
  <div>
    <h2>Size</h2>

    <div class="row">
      <div class="col-sm-6 col-md-4 col-lg-3">
        <button class="btn btn-info btn-sm" @click="dialog('lg')">Large</button>
        <button class="btn btn-info btn-sm" @click="dialog('sm')">Small</button>

        <div class="markdown-container">
          <Snippet/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Snippet from './Size.md'
export default {
  methods: {
    dialog(size) {
      this.$dialog({
        title: 'Custom Size',
        size,
      })
    },
  },
  components: {
    Snippet,
  },
}
</script>

<style lang="sass" type="sass/text" scoped></style>