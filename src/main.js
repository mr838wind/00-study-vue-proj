import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import providedService from "@/services";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  provide: {
    ... providedService
  },
  render: h => h(App)
}).$mount('#app')
