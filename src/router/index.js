import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import { Login } from 'views/'

import Adv from './adv/'
import Function from './function/'
import Dashboard from './dashboard/'
import Article from './article/'
import Demo from './demo/'
import components from './components/'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      hidden: true,
      redirect (to) {
        return 'login'
      }
    }, {
      path: '/login',
      name: '登录',
      hidden: true,
      component: Login
    },
    Dashboard,
    Article,
    Function,
    Demo,
    components,
    Adv
  ]
})
