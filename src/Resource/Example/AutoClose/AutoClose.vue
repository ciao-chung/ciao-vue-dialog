<template>
  <div>
    <h2>Auto Close</h2>

    <div class="row">
      <div class="col-sm-6 col-md-4 col-lg-3">
        <button class="btn btn-info btn-sm" @click="dialog('lg')">
          Auto Close
        </button>

        <div class="markdown-container">
          <Snippet/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Snippet from './AutoClose.md'
export default {
  methods: {
    dialog() {
      this.$dialog({
        title: 'Auto Close',
        close: 2000,
      })
    },
  },
  components: {
    Snippet,
  },
}
</script>

<style lang="sass" type="sass/text" scoped></style>