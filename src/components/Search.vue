/* Search */
<template>
  <div class="search">
    <input class="keyword" type="text" autocomplete="off" placeholder="搜索职位／公司／地区" v-model="keyword">
    <input class="adminSearch" type="button" value="搜索" @click="search" v-if="!$store.state.jobList.isLoading">
    <input class="adminSearch searching" type="button" value="搜索中" @click="search"
           v-if="$store.state.jobList.isLoading">
  </div>
</template>
<script>
  export default {
    name: 'search',
    data: function () {
      return {
        keyword: ''
      }
    },
    methods: {
      search: function () {
        this.$store.commit('removeSearchCondition', {key: 'keywords'})
        this.$store.commit('addSearchCondition',
          {
            key: 'keywords',
            value: String(this.keyword)
          }
        )
        this.$store.dispatch('queryJobList', this)
      }
    }
  }
</script>
<style scoped>
  .search {
    overflow: hidden;
  }

  .keyword {
    display: block;
    float: left;
    padding: 13px 15px;
    width: 76%;
    height: 18px;
    line-height: 18px;
    font-size: 16px;
    outline: none;
  }

  .adminSearch {
    float: right;
    margin-top: 0;
    font-size: 16px;
    line-height: 16px;
    border: 0 solid transparent;
    -moz-background-clip: padding;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    width: 142px;
    height: 48px;
    background-color: #00b38a;
    color: #fff;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    border-radius: 3px;
    outline: none;
    -webkit-appearance: none;
    cursor: pointer;
  }

  .adminSearch:hover {
    background-color: #00a57f;
  }

  .adminSearch.searching {
    background-color: #333;
  }
</style>

