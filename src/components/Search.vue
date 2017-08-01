/* Search */
<template>
  <div class="search">
    <input class="keyword" type="text" autocomplete="off" placeholder="搜索职位／公司／地区" v-model="keyword">
    <input class="adminSearch" type="button" value="搜索" v-on:click="search">
  </div>
</template>
<script>
  export default {
    name: 'search',
    data: function () {
      return {
        keyword: '',
        searchData: {
          keywords: '',
          area: '',
          minYear: '',
          academic: '',
          financing: '',
          sorting: '',
          minWage: '',
          maxWage: '',
          page: '1'
        }
      }
    },
    methods: {
      search: function () {
        // 修改默认查询数据
        this.searchData = {
          keywords: this.searchData.keywords,
          area: '',
          minYear: '',
          academic: '',
          financing: '',
          sorting: '',
          minWage: '',
          maxWage: '',
          page: '1'
        }
        this.http.getJobList(this.searchData).then(result => {
          if (result.data) {
            if (result.data.code) {
              // @TODO 渲染Listview视图
              console.log(result.data.list)
            } else {
              // @TODO 提示
              console.log('没有数据')
            }
          }
        })
      }
    }
  }
</script>
<style scoped>
  .search{
    overflow: hidden;
  }
  .keyword{
    display: block;
    float: left;
    padding: 13px 15px;
    width: 76%;
    height: 18px;
    line-height: 18px;
    font-size: 16px;
    outline: none;
  }
  .adminSearch{
    float: right;
    margin-top: 0;
    font-size: 16px;
    line-height: 16px;
    border: 0 solid transparent;
    -moz-background-clip: padding;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    padding: 16px 55px;
    background-color: #00b38a;
    color: #fff;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    border-radius: 3px;
    outline: none;
    -webkit-appearance: none;
  }
  .adminSearch:hover{
    background-color: #00a57f;
  }
</style>

