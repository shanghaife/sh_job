<!--<div>
/**
* Created by 何泽民 on 2017/7/20.
* QQ: 359816324
* weChat: 18635853230
* 例:
* <pagination :page = "page" :maxPage = "maxPage" @on-change="givePageNum"></pagination>
* page为其父组件中传入的 页码 数据,maxPage为要父组件中的 总页数 数据  givePageNum方法将要请求的页码带出
*/
</div>-->
<template>
	<div class="pagination">
    <span class="pg-item" :class="{ disabled: PreIsDisabled}" data-value="" @click="pre">上一页</span>
    <span class="pg-item" :class="{ active: item === nowIndex + 1}" data-value="" @click="jump2This(item)" v-for="(item, index) in getPageArray">{{item}}</span>
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
  data () {
    return {
      pageRange: 3,
      onSelectPage: null,
      PreIsDisabled: true,
      NextIsDisabled: false,
      pageArray: [],
      nowIndex: 0,
      developer: '何泽民359816324@qq.com'
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
      this.nowIndex = this.page - 1
    },
    nowIndex () {
      this.$emit('on-change', this.nowIndex + 1)
    }
  },
  methods: {
//    执行上一页操作
    pre: function () {
      if (this.maxPage === 1) {
        this.PreIsDisabled = true
        this.NextIsDisabled = true
        return false
      }
      this.NextIsDisabled = false
      if (this.nowIndex === 1) {
        this.PreIsDisabled = true
      }
      if (this.nowIndex === 0) {
        this.PreIsDisabled = true
        return false
      }
      this.nowIndex = this.nowIndex - 1
    },
//    执行下一页操作
    next: function () {
      if (this.maxPage === 1) {
        this.PreIsDisabled = true
        this.NextIsDisabled = true
        return false
      }
      this.PreIsDisabled = false
      if (this.nowIndex === this.maxPage - 2) {
        this.NextIsDisabled = true
      }
      if (this.nowIndex === this.maxPage - 1) {
        this.NextIsDisabled = true
        return false
      }
      this.nowIndex = this.nowIndex + 1
    },
//    点击跳转到该页
    jump2This: function (item) {
      if (this.maxPage === 1) {
        this.PreIsDisabled = true
        this.NextIsDisabled = true
        return false
      }
      this.nowIndex = item - 1
      if (this.nowIndex === 0) {
        this.PreIsDisabled = true
        this.NextIsDisabled = false
      } else if (this.nowIndex === this.maxPage - 1) {
        this.NextIsDisabled = true
        this.PreIsDisabled = false
      } else {
        this.PreIsDisabled = false
        this.NextIsDisabled = false
      }
    }
  },

  mounted () {
    var that = this
    setTimeout(function () {
      console.log(that.maxPage)
      if (that.maxPage === 1) {
        that.PreIsDisabled = true
        that.NextIsDisabled = true
      }
    }, 200)
  }
}
</script>

<style scoped lang="less" type="text/less">
  .pagination {
    margin-bottom: 5px;
    margin-top: 20px;
    text-align: center;

  .pg-item {
    font-family: "Hiragino Sans GB","Microsoft Yahei",SimSun,Arial,"Helvetica Neue",Helvetica;
    word-wrap: break-word;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    cursor: pointer;
    color: #555;
    display: inline-block;
    border: 1px solid #ededed;
    height: 21px;
    line-height: 21px;
    padding: 3px 10px;
    margin: 0 5px;
    font-size: 14px;
    text-decoration: none;
    -moz-user-select : none;
    -webkit-user-select : none;
    -ms-user-select : none;
    user-select : none;
  }
  .pg-total{
    margin-left: 10px;
    background: none;
    cursor: auto;
    font-size: 14px;
    font-family: "Hiragino Sans GB","Microsoft Yahei",SimSun,Arial,"Helvetica Neue",Helvetica;
    color: #333;
    word-wrap: break-word;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .disabled{
    color: #ccc;
    background: none;
    cursor: pointer;
  }
  .active{
    background-color: #00b38a!important;
    color: #fff!important;
    font-weight: 700;
    border-color: #00b38a!important;
    cursor: pointer;
  }
  }
</style>
