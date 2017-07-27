/**
* Created by 王冬 on 2017/7/22.
* QQ: 20004604
* weChat: qq20004604
* 移动端首页
*/
<template>
  <div class="head">
    <div class="topbar-box">
      <div class="topbar-content">
        <ul class="fl">
          <li><a v-on:click.prevent="goMobile">切换到PC端</a></li>
        </ul>
        <ul class="fr">
          <li><a v-on:click.prevent="doLogin">登录</a></li>
          <li><a v-on:click.prevent="doRegister">邀请注册</a></li>
        </ul>
      </div>
    </div>
    <div class="top">
      <img class="fl" src="../../assets/logo.png" alt="">
      <ul class="fl">
        <li class="fl">
          <div to='/'>首页</div>
        </li>
        <li class="fl">
          <div to='/detail'>职位详情</div>
        </li>
        <li class="fl">
          <router-link v-show="amILogin" to='/manage'>管理</router-link>
        </li>
      </ul>
      <p class="fr">
        <!--<router-link to='/login'>登录</router-link>-->
      </p>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'mTheader',
    data () {
      return {
        amILogin: false,
        developer: '零零水（20004604@qq.com）'
      }
    },
    methods: {
      doLogin: function (event) {
        console.log('登录')
        this.$router.push('/login')
      },
      doRegister: function (event) {
        console.log('注册')
      },
      // 切换到移动端首页
      goMobile () {
        this.$router.push('/')
      }
    }
  }
</script>
<style scoped lang="less" type="text/less">
  @import '~common/less/config.less';

  .fl {
    float: left;
  }

  .fr {
    float: right;
  }

  .head {
    width: 100%;
    line-height: 56px;
    box-sizing: border-box;
    .topbar-box {
      height: 30px;
      background-color: #333;
      .topbar-content {
        width: 1200px;
        margin: 0 auto;
        overflow: hidden;
        > ul {
          line-height: 30px;
          font-size: 14px;
          li {
            float: left;
            padding: 0 7.5px;
            a {
              width: 100%;
              line-height: 15px;
              color: #c4c3c3;
              cursor: pointer;
              &:hover {
                color: #fff;
              }
            }
          }
          li + li {
            padding: 0;
            a {
              padding-left: 7.5px;
              border-left: 1px solid #5d5d5d;
            }
          }
        }
      }
    }
    .top {
      max-width: 1200px;
      margin: 0 auto;
      overflow: hidden;
      > img {
        height: 34px;
        margin-top: 11px;
      }
      > span {
        color: @color-grey999;
      }
      ul {
        display: inline-block;
        margin-left: 40px;
        overflow: hidden;
        li {
          padding: 0 16px;
        }
      }
    }
  }
</style>

