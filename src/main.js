import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false
Vue.prototype.$apiUrl = 'http://localhost:1337'

var appVue = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
