<template>
  <div>
    <h2>Base</h2>
    <button class="btn btn-info btn-sm" @click="dialog">Base</button>

    <div class="row">
      <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="markdown-container">
          <Snippet/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Snippet from './Base.md'
export default {
  methods: {
    dialog() {
      this.$dialog('base')
    },
  },
  components: {
    Snippet,
  },
}
</script>

<style lang="sass" type="sass/text" scoped></style>