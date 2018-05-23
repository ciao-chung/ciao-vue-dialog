import Vue from 'vue'
import App from 'src/App'
import router from 'src/router.js'
import $ from 'jquery'
Vue.config.productionTip = false
if(!window.$) window.$ = $
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },  
})
