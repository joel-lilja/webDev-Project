import Vue from 'vue'
import App from './App.vue'
import HighchartsVue from 'highcharts-vue'
import Highcharts from 'highcharts'
import addWorldMap from './js/worldmap'


addWorldMap(Highcharts)

Vue.use(HighchartsVue)

new Vue({
  el: '#app',
  render: h => h(App)
})
