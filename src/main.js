import Vue from 'vue'
import App from 'src/App'
import router from 'src/router.js'
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },  
})
