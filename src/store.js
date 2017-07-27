/**
 * Created by 王冬 on 2017/7/19.
 * QQ: 20004604
 * weChat: qq20004604
 */
import Vue from 'vue'
import Vuex from 'vuex'
import http from '@/config/http'

Vue.use(Vuex)

let user = {
  state: {
    isLogin: false,
    username: ''
  },
  mutations: {
    login (state, payload) {
      state.isLogin = true
      state.username = payload.username
      console.log(state.username)
    },
    logout (state) {
      state.isLogin = false
      state.username = ''
    }
  },
  actions: {
    tryLogin (context) {
      http.post('/job/login').then(result => {
        if (result.data.code === '200') {
          context.commit('login', result.data)
        }
      })
    }
  }
}

const store = new Vuex.Store({
  state: {
    developersList: new Set()
  },
  mutations: {
    // 参数一是state状态
    addDeveloper (state, somebody) {
      state.developersList.add(somebody)
    },
    removeDeveloper (state, somebody) {
      state.developersList.delete(somebody)
    }
  },
  actions: {},
  modules: {
    user
  }
})

export default store
