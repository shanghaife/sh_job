/**
* Created by 王冬 on 2017/7/22.
* QQ: 20004604
* weChat: qq20004604
* PC端首页
*/
<template>
  <div>
    <theader></theader>
    <transition name="silide">
      <router-view></router-view>
    </transition>
    <groupList></groupList>
    <tfooter></tfooter>
  </div>
</template>
<script>
  import Theader from './Theader'
  import Tfooter from './Foot'
  import GroupList from './GroupList'

  export default {
    name: 'Index',
    components: {
      Theader,
      Tfooter,
      GroupList
    }
  }
</script>
