import {Home, Content} from 'layout/'

import { Function } from 'views/'

export default {
  path: '/dashboard',
  name: '仪表盘',
  icon: 'inbox',
  component: Home,
  redirect: '/dashboard/overview',
  children: [{
    path: 'overview',
    name: '网站信息',
    icon: 'inbox',
    component: Content,
    redirect: '/dashboard/overview',
    children: [{
      path: '',
      name: '概况',
      icon: 'inbox',
      component: Function.Open.List
    }, {
      path: 'monitor',
      name: '监控',
      icon: 'bar-chart',
      component: Function.Open.Echarts
    }]
  }]
}
