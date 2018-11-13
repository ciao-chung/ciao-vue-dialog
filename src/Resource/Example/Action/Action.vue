<template>
  <div>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4s">
        <h2>Accept/Dismiss</h2>
        <button class="btn btn-info btn-sm" @click="dialog">Accept/Dismiss</button>

        <div class="markdown-container">
          <AcceptSnippet/>
        </div>
      </div>

      <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4s">
        <h2>Async Accept</h2>
        <button class="btn btn-info btn-sm" @click="asyncAcceptDialog">Async Accept</button>

        <div class="markdown-container">
          <AsyncActionSnippet/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AcceptSnippet from './Action.md'
import AsyncActionSnippet from './AsyncAction.md'
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
    asyncAcceptDialog() {
      this.$dialog({
        title: 'Async Accept',
        accept: {
          callback() {
            return new Promise(resolve => {
              setTimeout(() => {
                resolve()
              }, 3000)
            })
          },
        },
      })
    },
  },
  components: {
    AcceptSnippet,
    AsyncActionSnippet,
  },
}
</script>

<style lang="sass" type="sass/text" scoped></style>