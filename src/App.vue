<template>
  <div id="app">
    <h1>Joel's Map App</h1>
    <keep-alive>
      <mapChart></mapChart>
    </keep-alive>
  </div>
</template>

<script>

import MapChart from './components/MapChart'

export default {
  name: 'app',
  data () {
  },
  components: {
    MapChart
  },
  methods: {
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
  margin: 0 auto;
  margin-top: 60px;
  width: 70%;
  /* background-color: blue; */
}
body {
  background-color: lightblue; 
}
 h1 {
   color: white; 
 }
</style>
