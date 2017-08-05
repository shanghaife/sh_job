/** 首页列表
* update by 零零水(20004604@qq.com) 2017/08/01 优化显示逻辑，增加对错误情况的判断和处理
*/
<template>
  <div class="app">
    <!-- 搜索组件 -->
    <search></search>
    <!-- 筛选组件 -->
    <selector></selector>
    <!-- 列表组件 -->
    <listview>
      <listitem v-if="items.length>0" :item="item" :key="item.id" v-for="item in items"></listitem>
      <div v-if="items.length === 0 && isLoading">加载中</div>
      <div v-if="items.length === 0 && !isLoading" @click="refreshList">没有拉取到任何数据，请点击
        <button>重新拉取</button>
      </div>
    </listview>
    <!-- 分页插件 -->
    <pagination :page="page" :maxPage="maxPage"></pagination>
    <!--<button @click="test">测试当前搜索条件</button>-->
  </div>
</template>
<script>
  import Search from 'component/Search'
  import Selector from 'component/Selector'
  import Listview from 'component/Listview'
  import Pagination from 'component/Pagination'
  import listitem from 'component/listitem'

  /** update by 零零水 2017/08/01，请求信息管理store
   * 注册：this.$store.commit('addSearchCondition',{key: 'page', value: String(this.page)})
   * 销毁：this.$store.commit('removeSearchCondition', {key: 'page'})
   * 更新：this.$store.commit('updateSearchCondition',{key: 'page', value: String(this.page)})
   * 获取：this.$store.state.jobList.searchCondition
   */
  let jobList = {
    state: {
      searchCondition: {},
      selector: null
    },
    mutations: {
      addSearchCondition (state, data) {
        if (state.searchCondition[data.key] !== undefined) {
          throw new Error('searchCondition has key: ' + data.key + ', you can\'t registry it')
        }
        state.searchCondition[data.key] = data.value
      },
      removeSearchCondition (state, data) {
        delete state.searchCondition[data.key]
      },
      updateSearchCondition (state, data) {
        state.searchCondition[data.key] = data.value
      },
      setSelector (state, data) {
        state.selector = data
      }
    }
  }

  export default {
    data () {
      return {
        page: 0,
        maxPage: 0,
        items: [],
        isLoading: false
      }
    },
    name: 'Homepage',
    computed: {
      searchCondition () {
        return this.$store.state.jobList.searchCondition
      },
      selector () {
        return this.$store.state.jobList.selector
      }
    },
    components: {
      Pagination,
      Search,
      Selector,
      Listview,
      listitem
    },
    methods: {
//      处理分页插件传出来的数据
      givePageNum (page) {
        console.log(page)
        this.refreshList({page: page})
      },
      // 列表刷新，参数是刷新条件，type: object
      refreshList (data) {
        this.isLoading = true
        this.http.getJobList(data).then(result => {
          this.isLoading = false
          console.log(result.data)
          this.items = result.data.list
          this.page = result.data.page
          this.maxPage = result.data.maxPage
        })
      },
      test () {
        console.log(this.$store)
      }
    },
    created () {
      this.$store.registerModule('jobList', jobList)
      this.refreshList()
    }
  }

</script>
<style>
  .app {
    min-width: 755px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
    box-sizing: border-box;
  }
</style>
