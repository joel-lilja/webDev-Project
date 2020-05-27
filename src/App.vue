<template>
  <div id="app">
    <app1 msg="Hey baby"/>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import app1 from './components/app1.vue'

export default {
  name: 'App',
  components: {
    app1
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
