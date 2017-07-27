<template>
  <div class="list-part">
    <listitem :item="item" :key="item.id" v-for="item in items"></listitem>
  </div>
</template>
<script>
  import listitem from './listitem'

  export default {
    name: 'listview',
    data () {
      return {
        items: []
      }
    },
    created () {
      this.refreshList()
    },
    methods: {
      // 列表刷新，参数是刷新条件，type: object
      refreshList (data) {
        this.http.getJobList(data).then(result => {
          this.items = result.data.list
        })
      }
    },
    components: {
      listitem
    }
  }
</script>
<style scoped lang="less" type="text/less">
  .list-part {
    // width: 800px;
    > div {
      color: #555;
      border: 1px solid #ededed;
      margin-top: 18px;
    }
  }

  .list_item_top {
    width: 100%;
    height: 82px;
    padding: 14px 15px 0;
    background: #fff;
    box-sizing: border-box;
    .position {
      width: 55%;
      margin-right: 20px;
      float: left;
      .p_top {
        height: 34px;
        line-height: 34px;
        h2 {
          float: left;
          max-width: 270px;
          margin: 0;
          font-size: 16px;
          color: #00b38a;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          word-wrap: normal;
        }
        .area {
          font-size: 16px;
          color: #00b38a;
          float: left;
          margin: 0 3px;
        }
        > span {
          float: left;
          margin: 0 3px;
          color: #999;
        }
      }
      .p_bot {
        height: 24px;
        line-height: 24px;
        .li_b_l {
          font-size: 14px;
          color: #555;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          word-wrap: normal;
          span {
            margin-right: 1em;
            font-size: 16px;
            color: #fd5f40;
          }
        }
      }
    }
    .company {
      width: 30%;
      float: left;
      margin-right: 15px;
      .company_name {
        height: 34px;
        line-height: 34px;
        a {
          display: inline-block;
          max-width: 196px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          word-wrap: normal;
          color: #00b38a;
          font-size: 16px;
          vertical-align: middle;
        }
      }
      .industry {
        height: 24px;
        line-height: 24px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
      }
    }
    .com_logo {
      float: left;
      a {
        display: block;
      }
    }
  }

  .list_item_bot {
    width: 100%;
    height: 40px;
    padding: 0 15px;
    box-sizing: border-box;
    background-color: #fafafa;
    .li_b_l {
      float: left;
      width: 55%;
      height: 40px;
      margin-right: 20px;
      line-height: 40px;
      overflow: hidden;
      span {
        display: inline-block;
        max-width: 84px;
        height: 20px;
        padding: 0 5px;
        font-size: 12px;
        line-height: 20px;
        color: #555;
        border: 1px solid #dcdcdc;
        border-radius: 3px;
        vertical-align: middle;
        margin-left: 6px;
      }
      span:first-child {
        margin-left: 0;
      }
    }
    .li_b_r {
      float: left;
      width: 30%;
      height: 40px;
      line-height: 40px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-wrap: normal;
    }
  }
</style>

