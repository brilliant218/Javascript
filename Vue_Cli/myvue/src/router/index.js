import Vue from 'vue'
import Router from 'vue-router'

import commonheader from '@/components/commonheader'
import carousecontentview from '@/components/carousecontentview'
import newscontentview from '@/components/newscontentview'
import SUHeader from '@/components/SUHeader'
import suinstalled from '@/components/suinstalled'
import suinstalling from '@/components/suinstalling'
import susearch from '@/components/susearch'
import susearchresult from '@/components/susearchresult'
import MainPage from '@/components/MainPage'
//import SystemUpdate from '@/components/SystemUpdate'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    /* {
      path: '/su',
      name: 'SystemUpdate',
      component: SystemUpdate
    } */
  ]
})
