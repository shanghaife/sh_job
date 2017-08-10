/*
* 我是筛选组件
* Created by 李志升 on 2017/7/20.
* QQ: 757592499
* weChat: 757592499
* updated 2017/08/06 李志升
* updated by 零零水(20004604@qq.com) 2017/08/10 大量修改优化
*/
<template>
  <div>
    <ul id="filterBox" class="filter-wrapper">
      <div class="details" id="filterCollapse">
        <item :selectorItem="minYear"></item>
        <item :selectorItem="area"></item>
        <item :selectorItem="academic"></item>
        <item :selectorItem="financing"></item>
      </div>
    </ul>
    <ul class="order" id="order">
      <li class="wrapper">
        <item-select :selectorItem="minWage"></item-select>
        <item-select :selectorItem="maxWage"></item-select>
        <!--<div class="item salary selectUI" :class="{'active': selectActive == 'minWage'}">-->
        <!--<span class="title">最低工资要求（月薪）：</span>-->
        <!--<div class="selectUI-text text" @click.stop="setSelectActive('minWage')"-->
        <!--@mouseleave.stop="setSelectActive('')">-->
        <!--<span>{{selectMinWageType}}</span>-->
        <!--<i></i>-->
        <!--<ul>-->
        <!--<li>-->
        <!--<a href="javascript:;" v-for="(item, index) of obj['minWage']" :key="index"-->
        <!--@click.stop="activeChange(obj['minWage'], item, 'minWage')">-->
        <!--{{item.name}}-->
        <!--</a>-->
        <!--</li>-->
        <!--</ul>-->
        <!--</div>-->
        <!--</div>-->
      </li>
    </ul>
  </div>
</template>
<script>
  import item from './SelectorItemRadio.vue'
  import itemSelect from './SelectorItemSelect.vue'

  export default {
    name: 'Selector',
    data () {
      return {
        minYear: {
          title: '经验要求',
          keyword: 'minYear',
          list: [
            {text: '经验不限', val: ''},
            {text: '不超过一年', val: '1'},
            {text: '不超过二年', val: '2'},
            {text: '不超过三年', val: '3'},
            {text: '不超过五年', val: '5'}
          ]
        },
        area: {
          title: '地　　区',
          keyword: 'area',
          list: [
            {text: '不限地市', val: ''},
            {text: '上海', val: '上海'},
            {text: '杭州', val: '杭州'},
            {text: '北京', val: '北京'}
          ]
        },
        academic: {
          title: '学　　历',
          keyword: 'academic',
          list: [
            {text: '无要求', val: ''},
            {text: '大专', val: '1'},
            {text: '本科', val: '2'},
            {text: '硕士', val: '3'},
            {text: '博士', val: '4'}
          ]
        },
        financing: {
          title: '融资程度',
          keyword: 'financing',
          list: [
            {text: '无要求', val: ''},
            {text: '不需要融资', val: '1'},
            {text: '未融资', val: '2'},
            {text: '天使轮', val: '3'},
            {text: 'A轮', val: '4'},
            {text: 'B轮', val: '5'},
            {text: 'C轮', val: '6'},
            {text: 'D轮及以上', val: '7'},
            {text: '上市', val: '8'}
          ]
        },
        minWage: {
          title: '最低工资要求（月薪）',
          keyword: 'minWage',
          list: [
            {text: '无要求', val: '0'},
            {text: '3k', val: '3000'},
            {text: '5k', val: '5000'},
            {text: '8k', val: '8000'},
            {text: '10k', val: '10000'},
            {text: '15k', val: '15000'},
            {text: '20k', val: '20000'},
            {text: '25k', val: '25000'},
            {text: '30k', val: '30000'},
            {text: '40k', val: '40000'},
            {text: '50k', val: '50000'},
            {text: '60k', val: '60000'},
            {text: '70k', val: '70000'},
            {text: '80k', val: '80000'},
            {text: '90k', val: '90000'},
            {text: '100k', val: '10000'}
          ]
        },
        maxWage: {
          title: '最高工资要求（月薪）',
          keyword: 'maxWage',
          list: [
            {text: '无要求', val: '0'},
            {text: '3k', val: '3000'},
            {text: '5k', val: '5000'},
            {text: '8k', val: '8000'},
            {text: '10k', val: '10000'},
            {text: '15k', val: '15000'},
            {text: '20k', val: '20000'},
            {text: '25k', val: '25000'},
            {text: '30k', val: '30000'},
            {text: '40k', val: '40000'},
            {text: '50k', val: '50000'},
            {text: '60k', val: '60000'},
            {text: '70k', val: '70000'},
            {text: '80k', val: '80000'},
            {text: '90k', val: '90000'},
            {text: '100k', val: '10000'}
          ]
        }
      }
    },
    components: {
      item,
      itemSelect
    }
  }
</script>
<style lang="less" scoped type="text/less">
  .filter-wrapper {
    margin-top: 18px;
    font-size: 14px;
  }

  .order {
    padding-left: 24px;
  }

  .filter-wrapper .details {
    position: relative;
    overflow: visible;
    background: #fafafa
  }

  ul.order {
    position: relative;
    margin-top: 9px;
    background-color: #fafafa;
    // border: 1px solid #ededed
    padding: 6px 16px;
  }

  ul.order .wrapper {
    zoom: 1;
    color: #555;
    font-size: 14px;
    display: flex;
  }

  ul.order .wrapper:before,
  ul.order .wrapper:after {
    content: "";
    display: table
  }

  ul.order .wrapper:after {
    clear: both
  }

  ul.order .wrapper .item {
    float: left;
    padding: 10px 0;
    height: 23px;
    line-height: 23px
  }

  ul.order .wrapper .item .title {
    font-weight: 600
  }

  ul.order .wrapper .item.order {
    margin-right: 35px;
    padding-left: 16px
  }

  ul.order .wrapper .item.order .title {
    margin-right: -5px
  }

  ul.order .wrapper .item.order a,
  ul.order .wrapper .item.order span {
    float: left;
    margin-right: 5px;
    padding: 5px 8px;
    height: 14px;
    line-height: 14px
  }

  ul.order .wrapper .item.order a.active,
  ul.order .wrapper .item.order a:hover {
    background-color: #00b38a;
    color: #fff
  }

  ul.order .wrapper .item.salary {
    min-width: 140px
  }

  ul.order .wrapper .item.type {
    min-width: 168px
  }

  ul.order .wrapper .item.selectUI {
    position: relative;
    margin-right: 40px;
    z-index: 1
  }

  ul.order .wrapper .item.selectUI .text {
    position: relative;
    float: right;
    padding: 0 10px 0 5px;
    width: 70px;
    border: 1px solid #f3f3f3;
    background-color: #fff;
    height: 22px;
    line-height: 22px;
    font-size: 14px;
    cursor: default
  }

  ul.order .wrapper .item.selectUI .text i {
    position: absolute;
    top: 8px;
    right: 5px;
    font-size: 0;
    height: 0;
    width: 0;
    border-width: 6px 6px 0;
    border-style: solid dashed;
    border-color: #9b9b9b transparent transparent;
    overflow: hidden;
    -webkit-transition: all .4s ease 0s;
    -moz-transition: all .4s ease 0s;
    -o-transition: all .4s ease 0s;
    transition: all .4s ease 0s
  }

  ul.order .wrapper .item.selectUI ul {
    position: absolute;
    top: 23px;
    left: 0;
    right: 0;
    display: none;
    border: 1px solid #f3f3f3
  }

  ul.order .wrapper .item.selectUI ul li a {
    display: block;
    padding: 5px;
    background-color: #fff;
    cursor: pointer
  }

  ul.order .wrapper .item.selectUI ul li a:hover {
    background-color: #fafafa
  }

  ul.order .wrapper .item.selectUI.active .text i {
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg);
    animation-fill-mode: forwards
  }

  ul.order .wrapper .item.selectUI.active ul {
    display: block
  }

</style>

