import Vue from 'vue'
import Buntpapier from 'buntpapier'
import App from './App.vue'
import router from './router'

import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import 'styles/main.styl'

Vue.config.productionTip = false
Vue.use(Buntpapier)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
