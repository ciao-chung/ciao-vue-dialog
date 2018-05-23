<template>
  <div>
    <h2>Custom Component</h2>
    <div class="row">
      <div class="col-sm-6 col-md-4 col-lg-3">
        <button class="btn btn-info btn-sm" @click="normal">Normal</button>

        <div class="markdown-container">
          <NormalSnippet/>
        </div>
      </div>

      <div class="col-sm-6 col-md-4 col-lg-3">
        <button class="btn btn-info btn-sm" @click="form">Form</button>

        <div class="markdown-container">
          <FormSnippet/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NormalSnippet from './Normal.md'
import FormSnippet from './Form.md'
import NormalCustomComponent from 'Resource/CustomComponent/Normal'
import FormCustomComponent from 'Resource/CustomComponent/Form'
export default {
  methods: {
    normal() {
      this.$dialog({
        title: 'Custom Component',
        size: 'lg',
        component: NormalCustomComponent,
      })
    },
    form() {
      this.$dialog({
        title: 'Send Product Menu',
        size: 'lg',
        component: FormCustomComponent,
        accept: {
          label: 'Send',
          callback(data) {
            if(!data) return
            alert(`We had sent email to ${data}`)
          }
        },
      })
    },
  },
  components: {
    NormalSnippet,
    FormSnippet,
    NormalCustomComponent,
    FormCustomComponent,
  },
}
</script>

<style lang="sass" type="sass/text" scoped></style>