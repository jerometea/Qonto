import Vue from 'vue'
import VueRouter from 'vue-router'

import Transactions from './components/Transactions.vue'
import Home from './components/Home.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode:'history',
  routes: [
    {
      path:'/',
      component:Home
    },
    {
      path:'/transactions',
      component:Transactions
    }
  ]
})