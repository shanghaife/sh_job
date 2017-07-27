/**
* Created by 于士博 on 2017/7/26.
* QQ: 491387425
* weChat: 491387425
* 筛选功能：目前功能为移动端筛选
*/

<template>
  <div class="filterBar">
    <div class="container">
      <div class="item">
        <div class="itemName" :class="{active : type == 'area'}" @click="chooseType('area')">{{areas}}</div>
        <transition name="showlist">
          <div v-show="type == 'area'" class="area">
            <div class="subContainer">
              <span class="subItem" v-for="item in areaList" :class="{active:areas == item.name}" @click="chooseArea(item)">
                {{item.name}}
              </span>
            </div>
          </div>
        </transition>
      </div>
      <div class="item">
        <div class="itemName" :class="{active : type == 'job'}" @click="chooseType('job')">职位筛选</div>
        <transition name="showlist">
          <div v-show="type == 'job'" class="area">
            <div class="subContainer">
              <div class="subTitle">工作经验</div>
              <span class="subItem" v-for="item in expList" :class="{active:exps.indexOf(item.name) > -1}" @click="chooseMulti(exps,item)">
                {{item.name}}
              </span>
              <div class="subTitle">学历要求</div>
              <span class="subItem" v-for="item in educationList" :class="{active:educations.indexOf(item.name) > -1}" @click="chooseMulti(educations,item)">
                {{item.name}}
              </span>
              <div class="btn-confirm" @click="jobConfirm">
                确定
              </div>
            </div>
          </div>
        </transition>
      </div>
      <div class="item">
        <div class="itemName" :class="{active : type == 'company'}" @click="chooseType('company')">公司筛选</div>
        <transition name="showlist">
          <div v-show="type == 'company'" class="area">
            <div class="subContainer">
              <div class="subTitle">融资阶段</div>
              <span class="subItem" v-for="item in stepList" :class="{active:steps.indexOf(item.name) > -1}" @click="chooseMulti(steps,item)">
                {{item.name}}
              </span>
              <div class="btn-confirm" @click="companyConfirm">
                确定
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <transition name="showcover">
      <div class="mask" v-show="type" @click="type = ''"></div>
    </transition>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        type: '',
        areaList: [
          {
            name: '全上海'
          },
          {
            name: '浦东新区'
          },
          {
            name: '徐汇区'
          },
          {
            name: '长宁区'
          },
          {
            name: '闵行区'
          },
          {
            name: '普陀区'
          },
          {
            name: '黄浦区'
          },
          {
            name: '杨浦区'
          }
        ],
        expList: [
          {
            name: '应届毕业生'
          },
          {
            name: '3年及以下'
          },
          {
            name: '3-5年'
          },
          {
            name: '5-10年'
          },
          {
            name: '10年以上'
          },
          {
            name: '经验不限'
          }
        ],
        educationList: [
          {
            name: '大专'
          },
          {
            name: '本科'
          },
          {
            name: '硕士'
          },
          {
            name: '博士'
          },
          {
            name: '不限'
          }
        ],
        stepList: [
          {
            name: '未融资'
          },
          {
            name: '天使轮'
          },
          {
            name: 'A轮'
          },
          {
            name: 'B轮'
          },
          {
            name: 'C轮'
          },
          {
            name: 'D轮及以上'
          },
          {
            name: '上市公司'
          },
          {
            name: '不需要融资'
          }
        ],
        areas: '全上海',
        exps: [],
        educations: [],
        steps: [],
        developer: '歪歪歪（491397425@qq.com）'

      }
    },
    components: {
    },
    created () {

    },
    methods: {
      chooseType (type) {
        if (this.type !== type) {
          this.type = type
        } else {
          this.type = ''
        }
      },
      chooseArea (item) {
        this.areas = item.name
        this.type = ''
      },
      chooseMulti (arr, item) {
        if (arr.indexOf(item.name) < 0) {
          arr.push(item.name)
        } else {
          arr = arr.filter(items => items !== item.name)
        }
      },
      jobConfirm () {
        alert(this.exps + ' &&   ' + this.educations)
        this.type = ''
      },
      companyConfirm () {
        alert(this.steps)
        this.type = ''
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
  .container{
    position: relative;
    display: flex;
    justify-content: space-between;
    border: 1px solid #eee;
    background-color: #fff;
    z-index: 103;
    .item{
      flex: 1;
      border-right: 1px solid #eee;
      &:nth-last-child(1){
        border-right: none;
      }
      .itemName{
        position: relative;
        text-align: center;
        padding: 0 1rem;
        line-height: 3rem;
        z-index: 104;
        &:after{
          position: absolute;
          right: 1rem;
          top: 1.3rem;
          width: 0;
          height: 0;
          content: "";
          border-width: 5px 5px 0 5px;
          border-style: solid;
          border-color: #000 transparent;
          transition: transform .25s;
        }
        &.active{
          color: #00b38b;
        }
        &.active:after{
          transform: rotate(180deg);
          border-color: #00b38b transparent;
        }
      }
      .area{
        position: absolute;
        left: -1px;
        top: 3rem;
        width: 101%;
        padding: 1rem;
        background: #fff;
        z-index: 100;
        box-sizing: border-box;
      }
    }
    .subContainer{
      letter-spacing: -3px;
      .subTitle{
        letter-spacing: 1px;
        margin: 1.5rem 0 .6rem 0;
        &:nth-child(3n){
          margin-right: 0;
        }
      }
      .subItem{
        letter-spacing: 0;
        display: inline-block;
        width: 31%;
        margin: 0 3% .6rem 0;
        padding: .4rem .8rem;
        border: 1px solid #eee;
        text-align: center;
        font-size: .9rem;
        box-sizing: border-box;
        &:nth-child(3n){
          margin-right: 0;
        }
        &.active{
          background: #00b38b;
          color: #fff;
        }
      }
      .btn-confirm{
        margin-top: 3rem;
        padding: .8rem;
        border-radius: 2px;
        text-align: center;
        background-color: #00b38b;
        font-size: 1rem;
        color: #fff;
        letter-spacing: .4rem;
      }
    }
  }
  .mask{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,.6)
  }
  .showlist-enter-active, .showlist-leave-active {
    transition: all .3s;
    transform: translateY(0);
  }

  .showlist-enter, .showlist-leave-active {
    opacity: 0;
    transform: translateY(-100%);
  }

  .showcover-enter-active, .showcover-leave-active {
    transition: opacity .3s
  }
  .showcover-enter, .showcover-leave-active {
    opacity: 0
  }
</style>
