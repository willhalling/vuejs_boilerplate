<template>
  <div id="app">
    <o-header></o-header>
    <hr />
    <router-view/>
    <hr />
    <o-footer></o-footer>
  </div>
</template>

<script>
import Header from '@/components/Header/header'
import Footer from '@/components/Footer/footer'

export default {
  name: 'App',
  components: {
    'o-header': Header,
    'o-footer': Footer,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
