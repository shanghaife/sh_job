<template>
  <div class="app">
    <!-- 搜索组件 -->
    <search></search>
    <!-- 筛选组件 -->
    <selector></selector>
    <!-- 列表组件 -->
    <listview></listview>
    <!-- 分页插件 -->
		<!-- <pagination for="some-entity" :records="500"></pagination> -->
  </div>
</template>
<script>
  import Search from 'component/Search'
  import Selector from 'component/Selector'
  import Listview from 'component/Listview'
  // import { Pagination, PaginationEvent } from 'vue-pagination-2'
  export default {
    name: 'Homepage',
    components: {
      // Pagination,
      Search,
      Selector,
      Listview
    }
  }
//   PaginationEvent.$on('vue-pagination::some-entity', function (page) {
//       // display the relevant records using the page param
// })
</script>
<style>
   .app{
     min-width: 755px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
    box-sizing: border-box;
  } 
	/* .VuePagination__pagination-item{
		display: inline-block;
    border: 1px solid #ededed;
    height: 21px;
    line-height: 21px;
    padding: 3px 10px;
    margin: 0 5px;
    font-size: 14px;
    text-decoration: none;
    cursor: pointer;
	}
  .VuePagination__pagination-itema a{ 
    display: block;
  }
  .VuePagination__pagination-item.active{
    background-color: #00b38a!important;
    color: #fff!important;
    font-weight: 700;
    border-color: #00b38a!important;
  } */
</style>
