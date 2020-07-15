import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Storage from 'vue-ls'
import 'normalize.css'
import '../src/utils/mobile.css'
import './utils/module_use'
Vue.use(Storage)
// var FastClick = require('fastclick')
// FastClick.attach(document.body)
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
