<template>
  <div>
    <h2>Close Callback</h2>

    <div class="row">
      <div class="col-sm-6 col-md-4 col-lg-3">
        <button class="btn btn-info btn-sm" @click="dialog('lg')">
          Close Callback
        </button>

        <div class="markdown-container">
          <Snippet/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Snippet from './CloseCallback.md'
export default {
  methods: {
    dialog() {
      this.$dialog({
        title: 'Close Callback',
        closeCallback: () => alert('CloseCallback'),
      })
    },
  },
  components: {
    Snippet,
  },
}
</script>

<style lang="sass" type="sass/text" scoped></style>