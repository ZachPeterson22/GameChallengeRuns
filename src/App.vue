<template>
  <div id="app">
    <Nav />
    <!-- <h1>Make sure im working.</h1> -->
    <router-view/>
  </div>
</template>

<script>
import Nav from "./components/Navigation";

export default {
  name: 'app',
  components: {
    Nav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
