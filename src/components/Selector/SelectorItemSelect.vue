/**
* Created by 李志升 on 2017/8/10.
* QQ: 757592499
* weChat: 757592499
* 选择器：一行，select
* 示例：
<item-select :selectorItem="minWage"></item-select>
* minWage数据示例：
* minWage: {
*   title: '最低工资要求（月薪）',
*   keyword: 'minWage',
*   list: [
*     {text: '无要求', val: ''},
*     {text: '3k', val: '3000'}
*   ]
* }
*/
<template>
  <div class="select-wrap">
    <div class="title">{{selectorItem.title}}</div>
    <select name="" id="" @change="changeSelect($event.target.value)">
      <option :value="item.val" v-for="(item, index) of selectorItem.list" :key="item.text" :checked="!index">{{item.text}}</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    selectorItem: Object
  },
  created () {
    this.$store.commit('addSearchCondition', {key: this.selectorItem.keyword, value: String(this.value)})
  },
  destroyed () {
    this.$store.commit('removeSearchCondition', {key: this.selectorItem.keyword})
  },
  data () {
    return {
      value: ''
    }
  },
  methods: {
    changeSelect (val) {
      this.value = val
      this.$store.commit('updateSearchCondition', {key: this.selectorItem.keyword, value: String(this.value)})
    }
  }
}
</script>

<style lang='less' scoped>
.select-wrap{
  display: flex;
  line-height: 24px;
  margin-right: 45px;
  select {
    height: 24px;
    text-decoration: none;
    color: #333;
    cursor: pointer;
    font-size: inherit;
    border-radius: 0;
  }
}
</style>
