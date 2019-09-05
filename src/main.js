import Vue from 'vue'
import App from './App.vue'
import router from './router'
import iView from 'iview';
import store from './vuex/store'

import './assets/styles/index'
import './assets/styles/app'
// WebSocket封装方法
import * as websocketApi from './utils/websocket.js'
Vue.prototype.websocketApi = websocketApi

Vue.use(iView);

Vue.config.productionTip = false
Vue.config.devtools = true

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

