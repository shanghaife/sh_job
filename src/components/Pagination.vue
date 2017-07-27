<template>
	<ul class="pagination pagination-md pull-right ">
		<li v-if="this.combination.cur>1">
			<a v-on:click="combination.cur-- ,pageClick()">上一页</a>
		</li>
		<li v-else class="disabled">
			<a>上一页</a>
		</li>
		<li v-for="index in indexs" v-bind:class="{'active': combination.cur === index }" :key=index.key>
			<a v-on:click="btnClick(index)">{{ index }}</a>
		</li>
		<li v-if="this.combination.cur != this.combination.all">
			<a v-on:click="combination.cur++,pageClick()">下一页</a>
		</li>
		<li v-else class="disabled">
			<a>下一页</a>
		</li>
		<li class="disabled">
			<a>共
				<i>{{ combination.all }}</i>页</a>
		</li>
	</ul>
</template>

<style>
.pagination {
	margin-bottom: 5px;
}
</style>
<script>
export default {
  name: 'Pagination',
  props: ['combination'],
  data () {
    return {
      combination: {
        'cur': 0,
        'all': 10
      }
    }
  },
  computed: {
    indexs: function () {
      let left = 1
      let right = this.combination.all
      let ar = []
      if (this.combination.all >= 7) {
        if (this.combination.cur > 5 && this.combination.cur < this.combination.all - 4) {
          left = this.combination.cur - 3
          right = this.combination.cur + 3
        } else {
          if (this.combination.cur <= 5) {
            left = 1
            right = 7
          } else {
            right = this.combination.all
            left = this.combination.all - 6
          }
        }
      }
      while (left <= right) {
        ar.push(left)
        left++
      }
      return ar
    }
  },
  methods: {
    btnClick: function (value) {
      if (value !== this.combination.cur) {
        this.combination.cur = value
      }
      // this.$http.get('/'+this.combination.type+'/page'+this.combination.cur, function (data) {
      //   this.combination = data;
      // });
      console.log('现在在' + this.combination.cur + '页')
    },
    pageClick: function () {
      console.log('现在在' + this.combination.cur + '页')
      // this.$http.get('/'+this.combination.type+'/page'+this.combination.cur, function (data) {
      //   this.combination = data;
      // });
    }
  }
}
</script>
