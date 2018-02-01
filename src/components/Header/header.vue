<template>
  <header class="header">
    <img src="../../assets/logo.svg" />
    <slot />
  </header>
</template>

<script>
export default {
  name: 'Header',
  components: {},
  props: {},
  mounted () {},
  data: () => ({})
}
</script>

<style lang="scss">
    @import "./header";
</style>
