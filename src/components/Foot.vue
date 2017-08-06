/**
* Created by 零零水 on 2017/7/19.
* QQ: 20004604
* weChat: qq20004604
* 页脚：目前功能为展示开发者列表
*/
<template>
  <div class="footer">
    <div class="main-table">
      <p class="title">本项目github链接：<a href="https://github.com/shanghaife/sh_job">https://github.com/shanghaife/sh_job</a></p>
      <p class="title">本站访问次数：<strong style="font-weight: bold;color: #333;">{{visitTime}}</strong></p>
      <p class="title">本页开发者列表（感谢那些做出贡献的人们）：</p>
      <p>
        <template v-if="developers.length>0">
        <span v-for="(developer,i) in developers">
          {{developer}}{{i < developers.length-1?'， ':''}}
        </span>
        </template>
      </p>
    </div>
  </div>
</template>
<style scoped lang="less" type="text/less">
  .footer {
    border-top: 1px solid #ddd;
    padding-top: 20px;
  }

  .main-table {
    min-width: 755px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
    box-sizing: border-box;
    line-height: 24px;
  }

  .title {
    color: #563d7c;
    font-size: 16px;
    font-weight: 900;
  }

</style>
<script>
  export default {
    name: 'foot',
    data () {
      return {
        developer: '零零水(20004604@qq.com)',
        visitTime: 0
      }
    },
    computed: {
      // 返回开发者列表，用于显示开发者的
      developers () {
        return [...this.$store.state.developersList]
      }
    },
    mounted () {
      // 显示网站访问量
      this.http.getVisits().then(result => {
        if (result.data.code === 200) {
          this.visitTime = result.data.account
        } else {
          this.visitTime = result.data.error
        }
      })
    },
    methods: {}
  }
</script>
