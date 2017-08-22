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
      <div v-if="items.length === 0 && $store.state.jobList.isLoading">加载中</div>
      <div v-if="items.length === 0 && !$store.state.jobList.isLoading" @click="refreshList">没有拉取到任何数据，请点击
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
   * 获取（最终取值）：this.$store.getters.searchCondition
   * 发起ajax搜索：this.$store.dispatch('queryJobList', this)
   */
  let jobList = {
    state: {
      searchCondition: {},
      searchResult: {},
      isLoading: false
    },
    getters: {
      searchCondition (state) {
        let result = {}
        let data = state.searchCondition
        Object.keys(data).forEach(key => {
          if (data[key] !== undefined && data[key] !== '') {
            result[key] = data[key]
          }
        })
        return result
      },
      searchResult (state) {
        if (state.searchResult.code === '200') {
          return state.searchResult
        } else {
          return {
            page: 1,
            maxPage: 1,
            list: []
          }
        }
      }
    },
    mutations: {
      // 单个添加属性
      addSearchCondition (state, data) {
        if (state.searchCondition[data.key] !== undefined) {
          throw new Error(`searchCondition has key: "${data.key}" , you can't registry it`)
        }
        state.searchCondition[data.key] = data.value
        // 2017/08/10 修复了新增属性不会被监视的问题
        state.searchCondition = Object.assign({}, state.searchCondition)
      },
      removeSearchCondition (state, data) {
        state.searchCondition[data.key] = undefined
      },
      updateSearchCondition (state, data) {
        state.searchCondition[data.key] = data.value
      },
      // 更新搜索结果
      updateSearchResult (state, data) {
        state.searchResult = data
      },
      updateLoading (state, currentState) {
        state.isLoading = currentState
      }
    },
    actions: {
      queryJobList (context, component) {
        context.commit('updateLoading', true)
        context.commit('updateSearchResult', {})
        // 防连续请求，加100ms延迟
        setTimeout(() => {
          console.log(context.getters.searchCondition)
          component.http.getJobList(context.getters.searchCondition).then(result => {
            context.commit('updateLoading', false)
            if (result.data.code === '200') {
              context.commit('updateSearchResult', result.data)
            }
          }).catch(() => {
            context.commit('updateLoading', false)
          })
        }, 100)
      }
    }
  }

  export default {
    data () {
      return {
        name: 'homepage'
      }
    },
    name: 'Homepage',
    computed: {
      searchCondition () {
        return this.$store.getters.searchCondition
      },
      items () {
        return this.$store.getters.searchResult.list
      },
      page () {
        return this.$store.getters.searchResult.page
      },
      maxPage () {
        return this.$store.getters.searchResult.maxPage
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
      // 列表刷新，参数是刷新条件，type: object
      refreshList () {
        this.$store.dispatch('queryJobList', this)
      }
    },
    created () {
      // 注册动态store
      this.$store.registerModule('jobList', jobList)
      this.refreshList()
    },
    destroyed () {
      // 销毁动态store
      this.$store.unregisterModule('jobList', jobList)
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
