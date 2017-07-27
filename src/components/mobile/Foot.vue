/**
* Created by 于士博 on 2017/7/26.
* 参考 王冬 pc端页脚.
* QQ: 491387425
* weChat: 491387425
* 移动端页脚：目前功能为展示开发者列表
*/

<template>
  <div class="footer">
    <div class="main-table">
      <p class="title">本页开发者列表（感谢那些做出贡献的人们）：</p>
      <p class="developers">
        <template v-if="developers.length>0">
        <span v-for="(developer,i) in developers">
          {{developer}}{{i < developers.length-1?'， ':''}}
        </span>
        </template>
      </p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'foot',
    data () {
      return {
        developer: 'footer作者'
      }
    },
    computed: {
      // 返回开发者列表，用于显示开发者的
      developers () {
        return [...this.$store.state.developersList]
      }
    },
    methods: {}
  }
</script>

<style scoped lang="less" type="text/less">
  .footer {
    position: absolute;
    left: 0;
    bottom: 0;
    border-top: 1px solid #ddd;
    padding: .4rem .6rem;
  }

  .main-table {
    margin: 0 auto;
    padding: 10px;
    box-sizing: border-box;
    line-height: 1.5rem;
  }

  .title {
    color: #563d7c;
    font-size: .9rem;
    font-weight: 900;
  }
  .developers{
    max-height: 3rem;
    overflow: scroll;
  }
</style>
