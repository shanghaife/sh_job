<template>
  <!-- <div>我是登陆页面</div> -->
  <div>
    <header class="sso_header">
      <a href="http://www.lagou.com" class="logo">
      </a>
    </header>
    <section class="content_box cleafix">
      <div class="left_area fl">
        <div class="form_head">
          <ul class="form_head clearfix">
            <li class="active">
              密码登录
            </li>
          </ul>
          <span class="tab_active"></span>
        </div>
        <div class="form_body" data-view="passwordLogin">
          <div class="input_item clearfix" data-propertyname="username" data-controltype="Phone">
            <input type="text" class="input input_white" v-model="user.username" name="" placeholder="请输入常用手机号/邮箱"
                   data-required="required" autocomplete="off">
          </div>
          <div class="input_item clearfix" data-propertyname="password" data-controltype="Password">
            <input type="password" class="input input_white" v-model="user.password" name="" placeholder="请输入密码"
                   data-required="required"
                   autocomplete="off">
          </div>
          <div class="input_item clearfix">
            <!-- 跳转到重置密码路由 或者 联系管理员 -->
            <a rel="nofollow" class="forgot_pwd">忘记密码？</a>
          </div>
          <div class="input_item btn_group clearfix">
            <input type="submit" class="btn btn_green btn_active btn_block btn_lg" @click="login" value="登  录">
          </div>
        </div>
      </div>
      <div class="right_area fr">
        <a class="btn_green btn btn_lg btn-block">点我注册</a>
      </div>
    </section>
  </div>
</template>
<script>
  export default {
    name: 'landpage',
    data () {
      return {
        user: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      login () {
        if (this.user.username.length === 0 || this.user.password.length === 0) {
          alert('请输入用户名或者密码')
          return
        }
        this.http.login(this.user).then(result => {
          if (result.data.code === '200') {
            this.$store.commit('login', result.data)
            alert(result.data.msg ? result.data.msg : '登录成功')
          } else {
            alert('登录失败。' + result.data.msg)
          }
        })
      }
    }
  }
</script>
<style scoped>
  label,
  select,
  button,
  input[type=button],
  input[type=reset],
  input[type=submit],
  input[type=radio],
  input[type=checkbox] {
    cursor: pointer;
  }

  .btn_green {
    color: #00b38a;
    border-color: #00b38a;
    background-color: #fff;
  }

  .btn_block {
    display: block;
    width: 100%;
  }

  .btn_lg {
    font-size: 18px;
    line-height: 46px;
    height: 46px;
  }

  .btn {
    font-size: 16px;
    line-height: 44px;
    display: inline-block;
    height: 44px;
    padding: 0 30px;
    text-align: center;
    text-decoration: none;
    color: #fff;
    border: 1px solid #fff;
    outline: 0;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
    -webkit-transition: .05s linear;
    -o-transition: .05s linear;
    transition: .05s linear;
  }

  .input,
  .dropbtn {
    font-size: 14px;
    position: relative;
    z-index: 1;
    height: 44px;
    line-height: 1;
    line-height: 44px \9;
    vertical-align: middle;
    color: #333;
    border-width: 1px;
    border-style: solid;
    outline: 0;
  }

  .sso_header {
    position: relative;
    width: 100%;
    height: 360px;
    background-color: #00b38a;
  }

  .content_box {
    width: 552px;
    margin: -205px auto 60px;
    padding: 62px 70px 68px 78px;
    background-color: #fff;
    display: table;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
    border: 1px solid #dce1e6;
    position: relative;
    z-index: 1;
  }

  .left_area {
    width: 290px;
  }

  .form_head {
    position: relative;
    z-index: 1;
    height: 33px;
    margin-bottom: 29px;
    border-bottom: 1px solid #ebebeb;
  }

  .form_head li {
    font-size: 16px;
    line-height: 24px;
    position: relative;
    float: left;
    width: 100%;
    height: 33px;
    cursor: pointer;
    text-align: center;
    color: #333;
  }

  .form_head li.active {
    color: #00b38a;
  }

  .content_box .tab_active {
    position: absolute;
    left: 0;
    bottom: -1px;
    z-index: 1;
    background-color: #00b38a;
    width: 290px;
    height: 1px;
  }

  .content_box .tab_active:before,
  .content_box .tab_active:after {
    position: absolute;
    z-index: 2;
    top: -12px;
    left: 50%;
    margin-left: -3px;
    content: '';
    width: 0;
    height: 0;
    line-height: 0;
    border: 6px solid transparent;
    border-bottom-color: #007b5f;
  }

  .content_box .tab_active:after {
    z-index: 3;
    top: -11px;
    width: 0;
    height: 0;
    line-height: 0;
    border: 6px solid transparent;
    border-bottom-color: #fff;
  }

  .content_box .input_item {
    position: relative;
  }

  .content_box .input_white,
  .content_box .dropbtn_white {
    border-left: 0;
    border-top: 0;
    border-right: 0;
    border-color: #ededed;
    background: 0 0;
  }

  .content_box .input {
    box-sizing: border-box;
    width: 290px;
    border-radius: 0;
  }

  .input_item:first-child {
    z-index: 2;
  }

  .content_box .input_item + .input_item {
    margin-top: 20px;
  }

  .content_box .forgot_pwd {
    position: relative;
    float: right;
    font-size: 14px;
    display: block;
    text-align: right;
    text-decoration: none;
    color: #00b38a;
    margin-top: -5px;
    z-index: 3;
  }

  .content_box .input_item.btn_group {
    margin-top: 24px;
  }

  .btn_green:hover,
  .btn_green.btn_active {
    color: #fff;
    border-color: #00b38a;
    background-color: #00b38a;
    text-decoration: none;
  }
</style>
