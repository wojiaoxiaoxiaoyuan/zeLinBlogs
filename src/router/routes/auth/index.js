import * as routeNames from '@/router/route-names'

const login = r => require.ensure([], () => r(require('@/views/auth')), 'login')

export default [{
  path: '/', // 根目录重定向
  redirect: {
    name: routeNames.LOGIN
  }
}, {
  path: '/auth', // 企业用户登录和注册
  name: routeNames.LOGIN,
  component: login
}]
