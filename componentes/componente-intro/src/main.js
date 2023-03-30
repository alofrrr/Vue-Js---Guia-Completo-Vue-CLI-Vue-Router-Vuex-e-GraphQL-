import Vue from 'vue'
import App from './App.vue'
import MeusContadores from './MeusContadores.vue'

Vue.config.productionTip = false
Vue.component('app-contadores', MeusContadores)

new Vue({
  render: h => h(App),
}).$mount('#app')
