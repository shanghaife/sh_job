<template>
  <!-- <div>我是JD发布页面</div> -->
  <div class="publish">
    <div class="publish-con">
      <p class="publish-item"><span>1&nbsp;</span>职位基本信息</p>
      <div class="job-item">
        <p class="left-part">地区／area</p>
        <input type="text" placeholder="例如:上海市浦东区XX路，小于10个字" v-model="info.area">
      </div>
      <div class="job-item">
        <p class="left-part">公司名／companyName</p>
        <input type="text" placeholder="例如:BAT，小于40个字" v-model="info.companyName">
      </div>
      <div class="job-item">
        <p class="left-part">融资程度／financing</p>
        <select name="" class="select" v-model="info.financing">
          <option value="1">不需要融资</option>
          <option value="2">未融资</option>
          <option value="3">天使轮</option>
          <option value="4">A轮</option>
          <option value="5">B轮</option>
          <option value="6">C轮</option>
          <option value="7">D轮及以上</option>
          <option value="8">上市</option>
        </select>
      </div>
      <!--<div class="job-item">-->
      <!--<p class="left-part">职位名称／jobName</p>-->
      <!--<input type="text" placeholder="例如:web 前端">-->
      <!--</div>-->
      <div class="job-item">
        <p class="left-part">职位类型／jobType</p>
        <select name="" class="select" v-model="info.jobType">
          <option value="1">全职</option>
          <option value="2">兼职</option>
          <option value="3">实习</option>
          <option value="4">私活</option>
          <option value="5">其他</option>
        </select>
      </div>
      <!--<div class="job-item">
        <p class="left-part">岗位名称／position</p>
        <input type="text">
      </div>-->
      <p class="publish-item"><span>2&nbsp;</span>职位要求</p>
      <div class="job-item">
        <p class="left-part">经历和学历／exp & edu</p>
        <select name="" class="select small-select" v-model="info.minYear">
          <option value="0">无要求</option>
          <option value="1">1年以上</option>
          <option value="2">2年以上</option>
          <option value="3">3年以上</option>
          <option value="5">5年以上</option>
          <option value="10">10年以上</option>
        </select>
        <select name="" class="select small-select ml40" v-model="info.academic">
          <option value="0">不限</option>
          <option value="1">大专</option>
          <option value="2">本科</option>
          <option value="3">硕士</option>
          <option value="4">博士</option>
        </select>
      </div>
      <div class="job-item">
        <p class="left-part">薪资范围(月薪)／salary</p>
        <select name="" class="select small-select" v-model="info.minWage">
          <option value="3000">3k</option>
          <option value="5000">5k</option>
          <option value="8000">8K</option>
          <option value="10000">10K</option>
          <option value="15000">15K</option>
          <option value="20000">20K</option>
          <option value="25000">25K</option>
          <option value="30000">30K</option>
          <option value="40000">40K</option>
          <option value="50000">50K</option>
          <option value="60000">60K</option>
          <option value="70000">70K</option>
          <option value="80000">80K</option>
          <option value="90000">90K</option>
          <option value="100000">100K</option>
        </select>
        <select class="select small-select ml40" v-model="info.maxWage">
          <option value="3000">3k</option>
          <option value="5000">5k</option>
          <option value="8000">8K</option>
          <option value="10000">10K</option>
          <option value="15000">15K</option>
          <option value="20000">20K</option>
          <option value="25000">25K</option>
          <option value="30000">30K</option>
          <option value="40000">40K</option>
          <option value="50000">50K</option>
          <option value="60000">60K</option>
          <option value="70000">70K</option>
          <option value="80000">80K</option>
          <option value="90000">90K</option>
          <option value="100000">100K</option>
        </select>
      </div>
      <div class="job-item">
        <p class="left-part">关键字／keywords</p>
        <input type="text" placeholder="请使用逗号隔开，最多5个且每个最多6个字" v-model="info.keywords" @blur="formatKeywords">
      </div>
      <div class="job-item">
        <p class="left-part">职位描述／requirement</p>
        <textarea placeholder="不少于50字且不多余2000字" v-model="info.description"></textarea>
      </div>

      <!--<div class="job-item">
        <p class="left-part">工作地址／address</p>
        <input type="text" value="">
      </div>-->

      <p class="publish-item" style="color:red;">{{errorMessage}}</p>
      <button class="btn btn_lg btn_green" @click="submit">发布招聘</button>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'publishpage',
    data () {
      return {
        info: {
          keywords: '',
          area: '',
          minYear: '0',
          academic: '0',
          financing: '0',
          minWage: '0',
          maxWage: '0',
          companyName: '',
          jobType: '1',
          description: ''
        },
        errorMessage: ''
      }
    },
    methods: {
      formatKeywords () {
        this.info.keywords = this.info.keywords.replace(/[,，]/g, '，')
      },
      // 输入校验
      check () {
        this.errorMessage = ''
        if (this.info.area.length === 0) {
          this.errorMessage = '必须填写地区'
          return false
        }
        if (this.info.companyName.length === 0) {
          this.errorMessage = '必须填写公司名'
          return false
        }
        if (this.info.financing === '0') {
          this.errorMessage = '必须选择融资程度'
          return false
        }
        if (this.info.minWage === '0') {
          this.errorMessage = '必须选择薪资下限'
          return false
        }
        if (this.info.maxWage === '0') {
          this.errorMessage = '必须选择薪资上限'
          return false
        }
        if (this.info.description.length < 50) {
          this.errorMessage = '职位描述不能少于50字，现在有' + this.info.description.length + '字'
          return false
        } else if (this.info.description.length > 2000) {
          this.errorMessage = '职位描述不能大于2000字，现在有' + this.info.description.length + '字'
          return false
        }
        return true
      },
      // 提交
      submit () {
        if (!this.check()) {
          return
        }
        var data = {}
        Object.keys(this.info).forEach(key => {
          data[key] = this.info[key]
        })
        this.http.publishJob(data).then(result => {
          console.log(result)
          if (result.data.code === '200') {
            this.clean()
            alert('发布成功！')
          } else {
            this.errorMessage = result.data.msg
            if (result.data.error) {
              this.errorMessage += '，报错信息为：' + result.data.error.join(', ')
            }
            if (result.data.missAttributes) {
              this.errorMessage += '，缺少的属性为：' + result.data.missAttributes.join(', ')
            }
          }
        })
      },
      clean () {
        this.info = {
          keywords: '',
          area: '',
          minYear: '0',
          academic: '0',
          financing: '0',
          minWage: '0',
          maxWage: '0',
          companyName: '',
          jobType: '1',
          description: ''
        }
      }
    }
  }
</script>
<style scoped>
  .ml40 {
    margin-left: 40px;
  }

  .publish {
    padding: 20px;
    background: #EEF0F5;
  }

  .publish-con {
    width: 1200px;
    background: #fff;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 30px 200px;
  }

  .publish-item {
    line-height: 20px;
    margin-bottom: 8px;
  }

  .publish-item span {
    color: #00b38a;
    font-size: 24px;
  }

  .job-item {
    min-height: 46px;
    margin-bottom: 12px;
  }

  .left-part {
    float: left;
    width: 180px;
    line-height: 46px;
    text-align: right;
    margin-right: 20px;
    font-weight: lighter;
  }

  input {
    width: 336px;
    height: 40px;
    text-align: center;
    display: inline-block;
  }

  .select {
    width: 340px;
    height: 46px;
    box-sizing: border-box;
    padding: 6px;
    font-size: 16px;
  }

  .small-select {
    width: 150px;
  }

  textarea {
    width: 340px;
    height: 430px;
    padding: 12px;
    overflow-y: auto;
    box-sizing: border-box;
    display: inline-block;
    resize: none;
    margin-top: 10px;
  }

  textarea::-webkit-input-placeholder:after {
    display: block;
    content: "line@ \A line#"; /*  \A 表示换行  */
    color: red;
  }

  textarea::-moz-placeholder:after {
    content: "line@ \A line#"; /*  \A 表示换行  */
    color: red;
  }

  input.small-input {
    width: 185px;
  }

  select {
    float: left;
    display: block;
  }

  button {
    margin-left: -85px;
    position: relative;
    left: 50%;
  }
</style>
