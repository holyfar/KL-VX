import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import CSIIVxWeb from '@csii/vx-web'
import '@csii/vx-web/lib/theme-chalk/index.css'
Vue.use(CSIIVxWeb)
Vue.config.productionTip = false
Vue.use(CSIIVxWeb, { size: 'small', zIndex: 3000 })
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
