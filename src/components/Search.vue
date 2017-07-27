/* Search */ 
<template>
  <div class="search">
    <input class="keyword" type="text" autocomplete="off" placeholder="搜索职位／公司／地区">
    <input class="adminSearch" type="button" value="搜索">
  </div>
</template>
<script>
  export default {
    name: 'search'
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

