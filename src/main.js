import Vue from 'vue'

import App from './App.vue'
import {store} from "./store";

import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css';

import './assets/bootstrap/css/bootstrap.min.css'
import './assets/font-awesome/css/font-awesome.css'
import './assets/style.css'
import './assets/app.css'

Vue.config.productionTip = false
Vue.use(iView)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
