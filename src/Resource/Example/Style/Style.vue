<template>
  <div>
    <h2>Style</h2>

    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <button class="btn btn-success btn-sm" @click="dialog('success')">success</button>
        <button class="btn btn-primary btn-sm" @click="dialog('primary')">primary</button>
        <button class="btn btn-info btn-sm" @click="dialog('info')">info</button>
        <button class="btn btn-warning btn-sm" @click="dialog('warning')">warning</button>
        <button class="btn btn-danger btn-sm" @click="dialog('danger')">danger</button>
      </div>

      <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="markdown-container">
          <Snippet/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Snippet from './Style.md'
export default {
  methods: {
    dialog(style) {
      this.$dialog({
        title: style,
        style,
      })
    },
  },
  components: {
    Snippet,
  },
}
</script>

<style lang="sass" type="sass/text" scoped></style>