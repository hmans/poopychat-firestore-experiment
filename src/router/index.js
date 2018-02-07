import Vue from 'vue'
import Router from 'vue-router'
import PoopyChat from '@/components/PoopyChat'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PoopyChat',
      component: PoopyChat
    }
  ]
})
