/**
* Created by 王冬 on 2017/7/22.
* QQ: 20004604
* weChat: qq20004604
*/
<template>
  <div>
    <h2>似乎找不到页面呢……</h2>
    <h4 @click="goHomepage">点击返回首页</h4>
  </div>
</template>
<style scoped lang="less" type="text/less">
  * {
    font-weight: 900;
    text-align: center;
    h2 {
      font-size: 40px;
      color: red;
      margin-top: 300px;
    }
    h4 {
      font-size: 24px;
      color: blue;
      margin-top: 50px;
      text-decoration: underline;
      cursor: pointer;
    }
  }

</style>
<script>
  export default {
    data () {
      return {}
    },
    methods: {
      goHomepage () {
        this.$router.push('/')
      }
    }
  }
</script>
