/**
* Created by 王冬 on 2017/7/22.
* QQ: 20004604
* weChat: qq20004604
*/

<template>
  <div>
    <listitem :item='item' :key='item.id' v-for='item in items'></listitem>
  </div>
</template>
<style scoped>


</style>
<script>
  import listitem from './ListItem.vue'

  export default {
    data () {
      return {
        items: [
          {
            academic: 0,
            area: '上海市浦东区',
            company_name: '一个公司',
            ctime: '2017-07-12 13:00:00',
            financing: 0,
            id: 123,
            jobType: '',
            keywords: ['高薪', '弹性工作制'],
            maxWage: '10000',
            minWage: '0',
            minYear: 0
          },
          {
            academic: 0,
            area: '上海市浦东区',
            company_name: '一个公司',
            ctime: '2017-07-12 13:00:00',
            financing: 0,
            id: 123,
            jobType: '',
            keywords: ['高薪', '弹性工作制'],
            maxWage: '10000',
            minWage: '0',
            minYear: 0
          }
        ]
      }
    },
    methods: {},
    components: {
      listitem
    }
  }
</script>
