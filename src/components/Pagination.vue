<!--<div>
/**
* Created by 何泽民 on 2017/7/20.
* QQ: 359816324
* weChat: 18635853230
* 例:
* <pagination :page = "page" :maxPage = "maxPage"></pagination>
* page为其父组件中传入的 页码 数据,maxPage为要父组件中的 总页数 数据  givePageNum方法将要请求的页码带出
* updated 2017/08/01 王冬
* 注：①第一页的page是1
* ②修改初始化时，上一页和下一页两个按钮是否可以点击的判断
*/
</div>-->
<template>
  <div class="pagination">
    <span class="pg-item" :class="{ disabled: PreIsDisabled}" data-value="" @click="pre">上一页</span>
    <span class="pg-item" :class="{ active: item === page}" data-value="" @click="jump2This(item)"
          v-for="(item, index) in getPageArray">{{item}}</span>
    <span class="pg-item" :class="{ disabled: NextIsDisabled}" @click="next">下一页</span>
    <span class="pg-total">{{page}} / {{maxPage}}</span>
  </div>
</template>

<script>
  export default {
    name: 'Pagination',
    props: {
      page: {
        type: Number,
        default: 1
      },
      maxPage: {
        type: Number,
        default: 1
      }
    },
    created () {
      if (this.page === 1) {
        this.PreIsDisabled = true
      }
      if (this.page === this.maxPage) {
        this.NextIsDisabled = true
      }
      // 注册发送请求的信息
      this.$store.commit('addSearchCondition',
        {
          key: 'page',
          value: String(this.page)
        }
      )
    },
    destroyed () {
      // 销毁
      this.$store.commit('removeSearchCondition', {key: 'page'})
    },
    data () {
      return {
        pageRange: 3,
        onSelectPage: null,
        PreIsDisabled: true,
        NextIsDisabled: false,
        pageArray: [],
        developer: '何泽民(359816324@qq.com)'
      }
    },
    computed: {
//    获取分页页码列表数组
      getPageArray () {
        let start
        let end
        this.pageArray = []
        start = this.page - this.pageRange > 0
          ? this.page - this.pageRange : 1
        end = this.page + this.pageRange < this.maxPage
          ? this.page + this.pageRange : this.maxPage
        for (var i = start; i <= end; i++) {
          this.pageArray.push(i)
        }
        return this.pageArray
      }
    },
    watch: {
      page () {
        if (this.page === 1) {
          this.PreIsDisabled = true
        }
        if (this.page === this.maxPage) {
          this.NextIsDisabled = true
        }
      }
    },
    methods: {
//    执行上一页操作
      pre: function () {
        this.jump2This(this.page - 1)
      },
//    执行下一页操作
      next: function () {
        this.jump2This(this.page + 1)
      },
      // 点击跳转到该页
      jump2This: function (item) {
        // 更新请求信息
        this.$store.commit('updateSearchCondition',
          {
            key: 'page',
            value: String(item)
          }
        )
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
  .pagination {
    margin-bottom: 5px;
    margin-top: 20px;
    text-align: center;

    .pg-item {
      font-family: "Hiragino Sans GB", "Microsoft Yahei", SimSun, Arial, "Helvetica Neue", Helvetica;
      word-wrap: break-word;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      cursor: pointer;
      color: #555;
      display: inline-block;
      border: 1px solid #ededed;
      line-height: 21px;
      padding: 3px 10px;
      margin: 0 5px;
      font-size: 14px;
      text-decoration: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
    .pg-total {
      margin-left: 10px;
      background: none;
      cursor: auto;
      font-size: 14px;
      font-family: "Hiragino Sans GB", "Microsoft Yahei", SimSun, Arial, "Helvetica Neue", Helvetica;
      color: #333;
      word-wrap: break-word;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    .disabled {
      color: #ccc;
      background: none;
      cursor: pointer;
    }
    .active {
      background-color: #00b38a !important;
      color: #fff !important;
      font-weight: 700;
      border-color: #00b38a !important;
      cursor: pointer;
    }
  }
</style>
