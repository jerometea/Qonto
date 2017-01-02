import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import router from './routes'

Vue.use(VueResource)

var eventHub  = new Vue()
exports.eventHub = eventHub

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
