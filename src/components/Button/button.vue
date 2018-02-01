<template>
  <div class="button">
    <button type="button" @click="onClick" :class="css"><slot>Submit</slot></button>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    onClick: {
      type: Function,
      required: true
    },
    theme: {
      type: String,
      default: 'primary'
    },
    size: {
      type: String,
      default: ''
    }
  },
  computed: {
    css () {
      return `btn btn-${this.theme}${this.size ? ` btn-${this.size}` : ''}`
    }
  }
}
</script>
