/**
* Created by 于士博 on 2017/7/25.
* QQ: 491387425
* weChat: 491387425
* 移动端登录页：目前功能为登录
*/

<template>
  <div class="login">
    <div class="title">
      <h2>密码登录</h2>
      <img class="photo" src="../../assets/JS-logo.png" alt="">
    </div>
    <input-del
            placeholder="请输入邮箱或者手机号码"
            @check="checkAccount">
    </input-del>
    <input-del
            placeholder="请输入密码"
            inputType="password"
            @check="checkPwd">
    </input-del>
    <div class="btn-login"
         :class="{btnAvailable : account && password }"
         @click="login">
      登录
    </div>
    <span class="btn-forget" @click="toForget">
      忘记密码?
    </span>
    <tfooter></tfooter>
  </div>
</template>

<script type="text/ecmascript-6">
  // 组件
  import inputDel from './inputDel.vue'
  import Toast from './toast'
  import Tfooter from './Foot'
  export default {
    data () {
      return {
        account: null,
        password: null,

        developer: '歪歪歪（491397425@qq.com）'
      }
    },
    components: {
      inputDel,
      Tfooter
    },
    created () {

    },
    methods: {
      toForget () {
        Toast('router到 忘记密码.vue')
      },
      checkAccount (msg) {
        this.account = msg
      },
      checkPwd (msg) {
        this.password = msg
      },
      login () {
        if (this.account && this.password) {
          if (!this.checkPhoneOrEmail(this.account)) {
            Toast('请输入正确的手机或邮箱')
          } else if (this.checkComplex(this.password) < 3) {
            Toast('密码必须含有大小写字母、数字、标点符号三种以上')
          } else {
            let data = {
              username: this.account,
              password: this.password
            }
            this.http.login(data).then(result => {
              console.log(result.data)
              if (result.data.code === '200') {
                this.$store.commit('login', result.data)
              } else {
                Toast({
                  message: result.data.msg,
                  position: 'bottom'
                })
              }
            })
          }
        }
      },
      // 校验邮箱或手机 返回值为布尔值
      checkPhoneOrEmail (msg) {
        let emailReg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        let phoneReg = /^[1][0-9][0-9]{9}$/
        if (emailReg.test(msg) || phoneReg.test(msg)) {
          return true
        } else {
          return false
        }
      },
      // 校验字符串复杂度，返回值为1,2,3，4代表包含几种字符(数字、大写字母、小写字母、标点)
      checkComplex (msg) {
        if (msg.length < 6) {
          return 0
        }
        let ls = 0
        if (msg.match(/([a-z])+/)) {
          ls++
        }
        if (msg.match(/([0-9])+/)) {
          ls++
        }
        if (msg.match(/([A-Z])+/)) {
          ls++
        }
        if (msg.match(/[^a-zA-Z0-9]+/)) {
          ls++
        }
        return ls
      }

    }
  }
</script>

<style scoped lang="less" type="text/less">
  .login{
    padding: 4rem 1.2rem;
    .title{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.6rem;
      h2{
        font-size: 1.4rem;
        letter-spacing: .1rem;
      }
      .photo{
        width: 3.5rem;
        height: 3.5rem;
      }
    }
    .btn-login{
      margin-top: 3rem;
      padding: .8rem;
      border-radius: 2px;
      text-align: center;
      background-color: #b2e8db;
      font-size: 1rem;
      color: #fff;
      letter-spacing: .4rem;
    }
    .btnAvailable{
      background-color: #00b38b;
    }
    .btn-forget{
      display: inline-block;
      margin-top: .8rem;
      padding: .4rem 0;
      font-size: .8rem;
      color: #999;
    }
  }
</style>
