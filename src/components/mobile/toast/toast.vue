/**
* Created by 于士博 on 2017/7/25.
* QQ: 491387425
* weChat: 491387425
* 组件 toast：弹出几秒后消失的小弹窗
* 参数:   message : "显示的文字",
*         position: 'top || middle || bottom',
*         duration : 1000(持续时间)
*
*/

<template>
    <transition name='fade'>
        <div v-show='visible' :class='position' class='toast'>
            {{message}}
        </div>
    </transition>
</template>

<script>
    export default {
      data () {
        return {
          visible: false,
          message: '',
          position: ''
        }
      }
    }
</script>


<style>
  .toast {
    position: fixed;
    left: 50%;
    transform: translate(-50%,-50%) scale(1);
    word-wrap: break-word;
    padding: .5rem .8rem;
    text-align: center;
    z-index: 9999;
    font-size: .8rem;
    line-height: 1.2rem;
    max-width: 80%;
    color: #fff;
    border-radius: 5px;
    background: rgba(0,0,0,0.7);
    overflow: hidden;
  }
  .toast.middle{
    top: 50%;
  }
  .toast.top{
    top: 10%;
  }
  .toast.bottom{
    top: 90%;
  }
  .fade-enter-active, .fade-leave-active {
    transition: transform .5s
  }
  .fade-enter, .fade-leave-active {
    transform: translate(-50%,-50%) scale(0);
  }
</style>
