import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import './plugins/element.js'

// 样式
import './assets/css/reset.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
