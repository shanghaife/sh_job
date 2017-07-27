/**
* Created by 于士博 on 2017/7/25.
* QQ: 491387425
* weChat: 491387425
* 组件 带删除按钮的input：可清空input内容
* props:  inputType(目前有 text || password || number)
*         placeholder(String)
*         @check(方法: 将子组件input的值 赋值给 父组件的data)
*
*/

<template>
    <div class="input-del">
        <input v-if="inputType === 'text'" class="input" type="text"
               v-model="message"
               :placeholder="placeholder"
               @input="check" @focus="isFocus = true" @blur="isFocus = false">
        <input v-if="inputType === 'password'" class="input" type="password"
               v-model="message"
               :placeholder="placeholder"
               @input="check" @focus="isFocus = true" @blur="isFocus = false">
        <input v-if="inputType === 'number'" class="input" type="number"
               v-model="message"
               :placeholder="placeholder"
               @input="check" @focus="isFocus = true" @blur="isFocus = false">
        <img v-if="message" class="btn-del" src="../../assets/close-black.png" alt=""
             @click="clearText">
    </div>
</template>

<script>
    export default {
      data () {
        return {
          message: this.value,
          isFocus: false
        }
      },
      props: {
        // 默认input的type
        inputType: {
          type: String,
          default: 'text'
        },
        // 默认文字
        placeholder: {
          type: String,
          default: '请输入信息'
        }
      },
      methods: {
        // 子组件 通信 父组件
        check () {
          this.$emit('check', this.message.replace(/(^\s*)|(\s*$)/g, ''))
        },
        clearText () {
          this.message = ''
          this.check()
        }
      },
      directives: {

      },
      watch: {
        value (val) {
          this.message = val
        }
      }
    }
</script>

<style scoped lang="less" type="text/less">
    .input-del{
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        padding: .8rem 0;
        border-bottom: 1px solid #eee;
        .input{
            width: 100%;
            height: 1.6rem;
            border: none;
            outline: none;
            font-size: 1rem;
            /*color: #00b38a;*/
            /*text-shadow: 0 0 0 #000;*/
            /*-webkit-text-fill-color: transparent;*/
        }
        .btn-del{
            width: 1.6rem;
            height: 1.6rem;
            flex: 0 0 1;
            vertical-align: middle;
        }
    }
    input::-webkit-input-placeholder { /* WebKit browsers*/
        color:#ccc;
    }
    input:-moz-placeholder {  /* Mozilla Firefox 4 to 18*/
        color:#ccc;
    }
    input::-moz-placeholder {  /* Mozilla Firefox 19+*/
        color:#ccc;
    }
    input:-ms-input-placeholder { /* Internet Explorer 10+*/
        color:#ccc;
    }



</style>
