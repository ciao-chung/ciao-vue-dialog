<template>
  <div>
    <h2>Accept/Dismiss</h2>
    <button class="btn btn-info btn-sm" @click="dialog">Accept/Dismiss</button>

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
import Snippet from './Action.md'
export default {
  methods: {
    dialog() {
      this.$dialog({
        title: 'Accept/Dismiss',
        accept: {
          callback() {
            alert('after accept')
          },
        },
        dismiss: {
          callback() {
            alert('after dismiss')
          },
        },
      })
    },
  },
  components: {
    Snippet,
  },
}
</script>

<style lang="sass" type="sass/text" scoped></style>