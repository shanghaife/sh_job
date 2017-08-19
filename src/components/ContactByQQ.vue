/*
 * @Author: zhoupeng zhoupeng1995@live.com
 * @Date: 2017-08-19 14:53:03 
 * @Last Modified by: zhoupeng
 * @Last Modified time: 2017-08-19 16:09:30
 * @params qqNumber {String or Number} 可选项，如果不传入，这样式为灰色，鼠标悬浮后，为不可点击样式
 * @params text {String} 可选项，自定义框内的文本，默认为‘QQ联系’
 */
<template>
	<div class="wrapper" :class="{'cant-click': !qqNumber}" @click="openQQWindow">
		<img src="../assets/qq.svg" width="20" height="20" alt="通过qq联系" /><span>{{text}}</span> 
	</div>
</template>
<script>
export default {
  data () {
    return {
      developer: '周鹏2264746084@qq.com'
    }
  },
  props: {
    qqNumber: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: 'QQ联系'
    }
  },
  methods: {
    openQQWindow () {
      if (this.qqNumber.length < 5 || this.qqNumber.length > 11) {
        alert('该预留qq有误，请通过其他方式联系')
        return
      }
      let _window = window.open(`tencent://message/?Menu=yes&uin=${this.qqNumber}& Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45`, '', 200, 100)
      setTimeout(function () {
        _window.close()
      }, 200)
    }
  }
}
</script>
<style lang="less" scoped>
	div.wrapper {
		box-sizing: border-box;
		padding: 0 10px 0 10px;
		height: 30px;
		width: auto;
		border: 1px solid #9c9c9c;
		border-radius: 10px;
		font-size: 14px;
		line-height: 25px;
		text-align: center;
		cursor: pointer;
		transition: all .7s;


		&:hover {
			border: 1px solid rgb(0, 120, 215);
			color: rgb(0, 120, 215);
		}

		img, span{
			display: inline-block;
			vertical-align: middle;
		}
	}
	.cant-click {
		background: rgba(0, 0, 0, 0.2);

		&:hover {
			color: rgb(85, 85, 85) !important;
			border-color: #9c9c9c !important;
			cursor: not-allowed;
		}
	}
</style>

