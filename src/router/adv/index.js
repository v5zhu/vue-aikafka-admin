/**
 .
 */

import { Home } from 'layout/'

import article from './article'

export default {
  path: '/adv',
  name: '高级实战',
  icon: 'inbox',
  component: Home,
  redirect: '/adv/article',
  children: [article]
}