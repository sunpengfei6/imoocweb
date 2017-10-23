import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import top from '@/components/top'
import middle from '@/components/middle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/top',
      name: 'top',
      component: top
    },
    {
      path: '/middle',
      name: 'middle',
      component: middle
    }
  ]
})
