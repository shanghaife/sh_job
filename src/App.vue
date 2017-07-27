<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name: 'app',
    created () {
      /** Update 零零水 2017/07/24
       *  更新自动登录
       */
      this.$store.dispatch('tryLogin')
    }
  }
</script>
<style>
  @import 'common/css/reset.css';
</style>

