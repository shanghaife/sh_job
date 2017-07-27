<!--<div>
/**
* Created by 何泽民 on 2017/7/20.
* QQ: 359816324
* weChat: 18635853230
* listItem:使用时将列表数据和要跳转的页面路径数据以prop传入，例:
* <listitem :item="item" :path="item.id" :key="item.id" v-for="item in items"></listitem>
* items为其父组件中列表数据,detailPath为要父组件中的路径数据
*/
</div>-->
<template>
  <div>
    <div class="list_item_top" :date-id="item.id">
      <div class="position">
        <div class="p_top" @click="gotoJobInfo">
          <h2>{{item.jobName?item.jobName : 'web前端'}}</h2>
          <span class="area">[<em>{{item.area}}</em>]</span>
          <span class="format-time">{{item.ctime | filter_time}}发布</span>
        </div>
        <div class="p_bot">
          <div class="li_b_l">
            <span class="money">{{item.minWage | toFixedWage(0)}}-{{item.maxWage | toFixedWage(0)}}</span>
            {{item.minYear | filter_minYear}} / {{item.academic | filter_academic}}
          </div>
        </div>
      </div>
      <div class="company">
        <div class="company_name">
          <a>{{item.companyName}}</a>
        </div>
        <div class="industry">
          {{item.financing | filter_financing}}
        </div>
      </div>
    </div>
    <div class="list_item_bot">
      <div class="li_b_l">
        <span v-for="key in item.keywords" :key="key.id">{{key}}</span>
      </div>
      <div class="li_b_r"></div>
    </div>
  </div>
</template>
<style scoped lang="less" type="text/less">
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
        cursor: pointer;

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

        >
        span {
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
<script>
  export default {
    name: 'listitem',
    props: {
      item: {
        type: Object,
        default: {}
      }
    },
    data () {
      return {
        developer: '何泽民@359816324.com'
      }
    },
    methods: {
      // 跳转到职位详情
      gotoJobInfo () {
        var url = this.item.id
        console.log(url)
        this.$router.push('/detail/' + url)
      }
    }
  }
</script>

