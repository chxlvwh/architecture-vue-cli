import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import title from './modules/title'
import websocket from './modules/websocket'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    title,
    websocket
  }
})