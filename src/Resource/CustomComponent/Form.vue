<template>
  <div>
    <h5>Enter your email, we will send you product menu</h5>
    <input type="text" class="form-control"
      @keyup.enter="$emit('commitAccept')"
      v-model="localData">
  </div>
</template>

<script>
export default {
  props: {
    data: {
      default: null,
    },
  },
  data() {
    return {
      localData: null,
    }
  },
  watch: {
    localData(value) {
      this.$emit('updateData', value)
    },
    data(value) {
      this.localData = value
    },
  },
}
</script>