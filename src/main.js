import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/bootstrap/css/bootstrap.min.css'
import './assets/font-awesome/css/font-awesome.css'
import './assets/style.css'
import './assets/app.css'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
