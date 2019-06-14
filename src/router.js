import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'layout',
      component: () => import(/* webpackChunkName: "about" */ './views/layout/layout.vue'),
      children: [
        {
          path: '/index',
          name: 'index',
          component: () => import(/* webpackChunkName: "about" */ './views/index/index.vue')
        }
      ]
    }
  ]
})
