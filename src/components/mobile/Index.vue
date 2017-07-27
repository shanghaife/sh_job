/**
* Created by 王冬 on 2017/7/22.
* QQ: 20004604
* weChat: qq20004604
*/
<template>
  <div class="m-index">
    <theader></theader>
    <filterBar></filterBar>
    <transition name="silide">
      <router-view></router-view>
    </transition>
    <tfooter></tfooter>
  </div>
</template>
<style scoped>
</style>
<script>
  import Theader from './Theader'
  import FilterBar from './FilterBar'
  import Tfooter from './Foot'

  export default {
    name: 'mobileIndex',
    data () {
      return {
        msg: '这里是移动端首页',
        developer: '零零水（20004604@qq.com）'
      }
    },
    components: {
      Theader,
      Tfooter,
      FilterBar
    }
  }
</script>
