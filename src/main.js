import Vue from 'vue'
import App from './App.vue'

import '../src/assets/css/reset.css'
import '../src/assets/css/ddoudou.css'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import router from './router'
import axios from 'axios'


Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.prototype.$http = axios

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
