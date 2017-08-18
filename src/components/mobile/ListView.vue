/**
* Created by 王冬 on 2017/7/22.
* QQ: 20004604
* weChat: qq20004604
* Updated by 张帅 on 2018/8/18
* QQ: 3120921953
* 滚动加载
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
        page: 0,
        maxPage: 0,
        maxPageLoaded: -1,
        isLoading: false,
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
    methods: {
      // 监听滚动事件，判断是否加载数据
      handleScroll () {
        var d = window.document.documentElement
        var scrollHeight = d.scrollHeight
        var scrollTop = d.scrollTop
        var clientHeight = d.clientHeight
        var invisibleHeight = scrollHeight - scrollTop - clientHeight
        /**
         * 不加载的情况：
         *   1. 正在加载
         *   2. 屏幕底部据页面底部超过一个页面的距离
         *   3. 数据加载完毕
         *   4. 当前页面已经加载过
         */
        if (this.isLoading || invisibleHeight > clientHeight || this.page > this.maxPage || this.page < this.maxPageLoaded) {
          return
        }
        this.refreshList()
      },
      // 列表刷新，参数是刷新条件，type: object
      refreshList () {
        var data = {
          page: this.page + 1
        }
        this.isLoading = true
        this.http.getJobList(data).then(result => {
          this.isLoading = false
          this.items = this.items.concat(result.data.list)
          this.page = result.data.page
          this.maxPage = result.data.maxPage
          this.maxPageLoaded = this.maxPageLoaded < this.page ? this.page : this.maxPageLoaded
        })
      }
    },
    components: {
      listitem
    },
    mounted: function () {
      this.refreshList()
      this.handleScroll = this.$debounce.debounce(100, this.handleScroll)
      window.addEventListener('scroll', this.handleScroll)
    },
    beforeDestroy: function () {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
</script>
