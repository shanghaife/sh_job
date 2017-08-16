/**
* Created by 李志升 on 2017/8/13.
* QQ: 757592499
* weChat: qq757592499
* 选择器：一行，按钮点击型
* 示例：
<item :selectorItem="minYear"></item>
* minYear数据示例：
* minYear: {
*   title: '经验要求',
*   keyword: 'minYear',
*   list: [
*     {text: '经验不限', val: ''},
*     {text: '不超过一年', val: '1'},
*     {text: '不超过二年', val: '2'},
*     {text: '不超过三年', val: '3'},
*     {text: '不超过五年', val: '5'}
*   ]
* }
*/

<template>
  <li class="multi-chosen">
    <span class="title">{{selectorItem.title}}：</span>
    <a v-for="item in selectorItem.list" @click="changeSelect(item.val)" :class="{'active':value.includes(item.val)}"
       :key="item.text">{{item.text}}</a>
  </li>
</template>
<style lang="less" scoped type="text/less">
  .multi-chosen {
    padding-bottom: 10px;
    margin-top: -4px;
    padding: 6px 16px;
    zoom: 1;
    color: #555;
    font-size: 14px;
    height: 40px;
    line-height: 40px;
    .title {
      float: left;
      font-weight: 600;
      margin-right: -5px;
      padding: 5px 8px;
      height: 100%;
      line-height: 18px;
      font-size: inherit;
      min-width: 88px;
      text-align: right;
    }
    a {
      float: left;
      margin-right: 5px;
      padding: 5px 8px;
      text-decoration: none;
      color: #333;
      cursor: pointer;
      height: 100%;
      line-height: 18px;
      font-size: inherit;
    }
    a.active {
      position: relative;
      padding: 5px 7px 5px 8px;
      background-color: #00b38a;
      color: #fff;
    }
  }

  .multi-chosen:before,
  .multi-chosen:after {
    content: "";
    display: table
  }


</style>
<script>
  export default {
    props: {
      selectorItem: Object
    },
    created () {
      this.$store.commit('addSearchCondition', {key: this.selectorItem.keyword, value: this.value})
    },
    destroyed () {
      this.$store.commit('removeSearchCondition', {key: this.selectorItem.keyword})
    },
    data () {
      return {
        value: ['']
      }
    },
    methods: {
      changeSelect (val) {
        if (this.value.includes(val)) {
          this.value.splice(this.value.indexOf(val), 1)
        } else {
          this.value.push(val)
        }
        this.$store.commit('updateSearchCondition', {key: this.selectorItem.keyword, value: this.value})
      }
    }
  }
</script>
