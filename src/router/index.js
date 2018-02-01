import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import Homepage from '@/pages/homepage.vue'

Vue.use(Router)
Vue.use(Vuex)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    }
  ]
})
