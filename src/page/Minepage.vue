/*
 * @Author: woden0415.wangdong
 * @Date: 2017-08-15 09:11:13
 * @Last Modified by: woden0415.wangdong
 * @Last Modified time: 2017-08-15 09:45:35
 * @Description: 显示用户发布的信息列表
*/
<template>
  <div class="app">
    <listview>
      <div v-if="items.length > 0">
        <h1>我发布的职位</h1>
        <listitem  :item="item" :key="item.id" v-for="item in items"></listitem>
      </div>
      <div v-else-if="items.length == 0">
        <h2>登录信息已经过期，请重新登录</h2>
      </div>
      <div v-else>
        <h2>您还没有发布职位信息</h2>
      </div>
    </listview>
    <!-- @TODO 分页 -->
    <!-- <pagination :page="page" :maxPage="maxPage"></pagination> -->
  </div>
</template>

<script>
  import Listview from 'component/Listview'
  import listitem from 'component/listitem'
  import Pagination from 'component/Pagination'

  export default {
    data () {
      return {
        items: ''
      }
    },
    mounted () {
      this.http.getMineJobInfo().then(result => {
        if (result.data.code === '200') {
          this.items = result.data.list
        } else if (result.data.code === '0') {
          this.items = []
        }
      })
    },
    components: {
      Listview,
      listitem,
      Pagination
    }
  }
</script>

<style lang="less" scoped>
  .app {
    min-width: 755px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
    box-sizing: border-box;
    h1 {
      text-align: center;
      font-size: 30px;
      margin-top: 17px;
    }
  }
</style>
