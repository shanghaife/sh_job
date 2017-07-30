<template>
  <div class="app">
    <!-- 搜索组件 -->
    <search></search>
    <!-- 筛选组件 -->
    <selector></selector>
    <!-- 列表组件 -->
    <listview>
      <listitem :item="item" :key="item.id" v-for="item in items"></listitem>
    </listview>
    <!-- 分页插件 -->
    <pagination :page = "page" :maxPage = "maxPage" @on-change="givePageNum"></pagination>
  </div>
</template>
<script>
  import Search from 'component/Search'
  import Selector from 'component/Selector'
  import Listview from 'component/Listview'
  import Pagination from 'component/Pagination'
  import listitem from 'component/listitem'
  export default {
    data () {
      return {
        page: 0,
        maxPage: 0,
        items: []
      }
    },
    name: 'Homepage',
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
        this.refreshList({page: page})
      },
      // 列表刷新，参数是刷新条件，type: object
      refreshList (data) {
        this.http.getJobList(data).then(result => {
          console.log(result.data)
          this.items = result.data.list
          this.page = result.data.page
          this.maxPage = result.data.maxPage
        })
      }
    },
    created () {
      this.refreshList()
    }
  }
//  PaginationEvent.$on('vue-pagination::some-entity', function (page) {
//       // display the relevant records using the page param
//  })
</script>
<style>
   .app{
     min-width: 755px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
    box-sizing: border-box;
  }
	 /*.VuePagination__pagination-item{*/
		/*display: inline-block;*/
    /*border: 1px solid #ededed;*/
    /*height: 21px;*/
    /*line-height: 21px;*/
    /*padding: 3px 10px;*/
    /*margin: 0 5px;*/
    /*font-size: 14px;*/
    /*text-decoration: none;*/
    /*cursor: pointer;*/
	/*}*/
  /*.VuePagination__pagination-itema a{*/
    /*display: block;*/
  /*}*/
  /*.VuePagination__pagination-item.active{*/
    /*background-color: #00b38a!important;*/
    /*color: #fff!important;*/
    /*font-weight: 700;*/
    /*border-color: #00b38a!important;*/
  /*}*/
</style>
