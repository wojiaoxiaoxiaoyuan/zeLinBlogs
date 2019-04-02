// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入Element
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 引入全局样式
import 'shared/styles/base.styl'

// 注册全局组件
Vue.use(Element)

Vue.config.productionTip = false

// 屏蔽开发环境console.log
if (process.env.NODE_ENV === 'production') {
  console.log = () => {}
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  Element,
  components: { App },
  template: '<App/>'
})
