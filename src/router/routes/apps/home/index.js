import * as routeNames from '@/router/route-names'

const home = r => require.ensure([], () => r(require('@/views/apps/home')), 'home')

export default [{
  path: '/',
  redirect: 'home'
}, {
  path: 'home',
  name: routeNames.HOME,
  component: home
}]
