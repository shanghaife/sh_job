// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'common/less/config.less'
import service from './plugin/service'
import filter from './plugin/filter'
import http from './api/index'
import copy from './plugin/copy'
import store from './store'
import forDevelopment from './plugin/forDevelopment'

Vue.config.productionTip = false
Vue.use(service)
Vue.use(filter)
Vue.use(http)
Vue.use(copy)
// 开发调试配置
if (process.env.NODE_ENV === 'development') {
  Vue.use(forDevelopment)
} else {
  // 非开发状态屏蔽console.log显示
  console.log = function () {
  }
  console.error = function () {
  }
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: {App}
})
