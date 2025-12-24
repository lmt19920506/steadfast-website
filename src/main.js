import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

import axios from 'axios'//引入axios
Vue.prototype.$axios = axios;//把axios挂载到vue上

import '@/assets/scss/global.css'
import '@/assets/scss/mobile.css'
import '@/assets/scss/media.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
