import Vue from 'vue'
import Router from 'vue-router'
import BackEnd from '@/components/BackEnd'
import Design from '@/components/Design'
import FrontEnd from '@/components/FrontEnd'
import Landing from '@/components/Landing'
import Operations from '@/components/Operations'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/design',
      name: 'Design',
      component: Design
    },
    {
      path: '/front-end',
      name: 'Front-End',
      component: FrontEnd
    },
    {
      path: '/back-end',
      name: 'Back-End',
      component: BackEnd
    },
    {
      path: '/operations',
      name: 'Operations',
      component: Operations
    }
  ]
})
