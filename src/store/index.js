import Vue from 'vue'
import Vuex from 'vuex'

import api from './api'

Vue.use(Vuex)

const store = new Vuex.Store({

  state: {
    messages: null
  },

  mutations: {
    setNotifications (state, notifications) {
      state.messages = notifications
    }
  },

  actions: {
    latestNotifications: ({commit}) => {
      return api.getNotifications()
        .then(notifications => commit('setNotifications', notifications))
    }
  }

})

export default store
