import Vue from 'vue'
import App from './App.vue'
import { store } from './store'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes
})

new Vue({
  store: store,
  render: h => h(App),
  router: router
}).$mount('#app')
