import { Content, Home } from 'layout/'

import { Function } from 'views/'

export default {
  path: '/article',
  name: '我的文章',
  icon: 'inbox',
  component: Home,
  redirect: '/article/statistics',
  children: [{
    path: 'statistics',
    name: '文章统计',
    icon: 'inbox',
    component: Content,
    redirect: '/article/statistics/visit',
    children: [{
      path: 'visit',
      name: '访问统计',
      icon: 'inbox',
      component: Function.Open.List
    }, {
      path: 'archive',
      name: '归档统计',
      icon: 'bar-chart',
      component: Function.Open.Echarts
    }]
  }, {
    path: 'manage',
    name: '我的文章',
    icon: 'inbox',
    component: Content,
    redirect: '/article/manage',
    children: [{
      path: '',
      name: '文章管理',
      icon: 'inbox',
      component: Function.Open.List
    }, {
      path: 'category',
      name: '分类管理',
      icon: 'inbox',
      component: Function.Open.List
    }, {
      path: 'tag',
      name: '标签管理',
      icon: 'inbox',
      component: Function.Open.List
    }]
  }]
}
