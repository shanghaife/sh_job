/**
* Created by 零零水 on 2017/7/22.
* QQ: 20004604
* weChat: qq20004604
* PC端顶部栏+菜单栏
*
* Updated by 鬼谷中妖 on 2017/7/23
* QQ: 562550212
*
* Updated by 零零水 on 2017/07/24
* 更新了登录相关逻辑
*/
<template>
  <div class="head">
    <!-- 鬼谷中妖 2017-7-23 头部添加登录/注册按钮 -->
    <div class="topbar-box">
      <div class="topbar-content">
        <ul class="fl">
          <li><a>目前不提供登出功能，请清除缓存</a></li>
        </ul>
        <ul class="fr">
          <template v-if="!$store.state.user.isLogin">
            <li><a v-on:click.prevent="doLogin">登录</a></li>
            <li><a v-on:click.prevent="doRegister">邀请注册</a></li>
          </template>
          <template v-if="$store.state.user.isLogin">
            <li><a>用户：{{$store.state.user.username}} 欢迎你</a></li>
          </template>
        </ul>
      </div>
    </div>
    <!-- end 头部添加登录/注册按钮-->
    <div class="top-box">
      <div class="top">
        <!-- <img class="fl" src="../assets/JS-logo.png" alt=""> -->
        <ul class="fl">
          <li class="fl">
            <router-link to='/' v-bind:class="{'menu-active': ($route.path==='/'||$route.path==='/list')}">首页
            </router-link>
          </li>
          <!--<li class="fl">-->
            <!--<router-link to='/detail' v-bind:class="{'menu-active': ($route.path==='/detail')}">职位详情</router-link>-->
          <!--</li>-->
          <li class="fl">
            <router-link v-show="amILogin" to='/manage'>管理</router-link>
          </li>
        </ul>
        <p class="fr">
          <router-link to='/publish' v-if="$store.state.user.isLogin">发布职位</router-link>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'theader',
    data () {
      return {
        amILogin: false,
        developer: '鬼谷中妖 woden0415@163.com'
      }
    },
    methods: {
      // 登录
      doLogin: function (event) {
        // 跳转到登录页面
        this.$router.push('/login')
      },
      // 注册
      doRegister: function (event) {
        alert('目前采用邀请注册，请联系QQ：20004604')
      },
      // 切换到移动端首页
      goMobile () {
        this.$router.push('/m')
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
    /* line-height: 56px; */
    box-sizing: border-box;
    .topbar-box {
      height: 30px;
      background-color: @color-grey333;
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
    .top-box {
      border-bottom: 1px solid #e5e5e5;
      background-color: #fafafa;
    }
    .top {
      max-width: 1200px;
      margin: 0 auto;
      overflow: hidden;
      line-height: 56px;
      background-image: url('../assets/JS-logo.png');
      background-repeat: no-repeat;
      background-size: contain;
      > img {
        height: 34px;
        margin-top: 11px;
      }
      > span {
        color: @color-grey999;
      }
      ul {
        display: inline-block;
        margin-left: 55px;
        overflow: hidden;
        height: 58px;
        li {
          padding: 0 16px;
          a {
            color: @color-grey999;
            display: inline-block;
            height: 100%;
            &:hover {
              color: @color-grey333;
            }
          }
          .menu-active {
            color: @color-grey333;
            border-bottom: 2px solid #00b38a;
          }
        }
      }
    }
  }
</style>

