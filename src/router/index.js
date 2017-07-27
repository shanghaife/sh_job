import Vue from 'vue'
import Router from 'vue-router'
// import Listview from '@/components/Listview'
// PC端首页
import Index from 'component/Index'
// PC端组件
import HomePage from 'page/Homepage'
import Landpage from 'page/Landpage'
import Jddetail from 'page/Jddetail'
import Publishpage from 'page/Publishpage'
// 移动端首页
const mIndex = resolve => require(['../components/mobile/Index.vue'], resolve)
// 移动端登录
const mLogin = resolve => require(['../components/mobile/Login.vue'], resolve)
// 404
const notFound = resolve => require(['../components/404'], resolve)

// 移动端组件
const mListView = resolve => require(['../components/mobile/ListView.vue'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'Index',
      path: '/',
      component: Index,
      /* 鬼谷中妖 2017-7-23 qq562550212 */
      /* 菜单栏，首页点击重定向到list页面 */
      redirect: '/list',
      children: [
        {
          name: 'HomePage',
          path: 'list',
          component: HomePage
        },
        {
          name: 'landpage',
          path: 'login',
          component: Landpage
        },
        {
          name: 'jddetail',
          path: 'detail/*',
          component: Jddetail
        },
        {
          name: 'publishpage',
          path: 'publish',
          component: Publishpage
        }
      ],
      beforeEnter (to, from, next) {
        if (to.fullPath === '/') {
          next('/list')
          return
        } else {
          next()
        }
      }
    },
    {
      name: 'MobileIndex',
      path: '/m',
      component: mIndex,
      children: [
        {
          name: 'mListView',
          path: 'list',
          component: mListView
        }
      ],
      beforeEnter (to, from, next) {
        if (to.fullPath === '/m') {
          next('/m/list')
          return
        } else {
          next()
        }
      }
    },
    {
      name: 'MobileLogin',
      path: '/m/login',
      component: mLogin
    },
    {
      path: '*',
      component: notFound
    }
  ]
})
