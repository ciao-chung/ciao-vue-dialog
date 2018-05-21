import Vue from 'vue'
import Router from 'vue-router'
import Demo from 'resource/demo.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'demo',
      component: Demo,
    }
  ],
})
