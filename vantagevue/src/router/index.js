import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import su from '@/components/su'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/su',
      name: 'su',
      component: su
    }
  ]
})
