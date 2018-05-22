import Vue from 'vue'
import Router from 'vue-router'
import Demo from 'Resource/Demo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'demo',
      component: Demo,
    }
  ],
})
