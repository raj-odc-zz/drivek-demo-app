import Vue from 'vue'
import App from './components/App.vue'
import './../css/main.scss'
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#mainContent')
