/**
 * Created by 王冬 on 2017/7/20.
 * QQ: 20004604
 * weChat: qq20004604
 * 过滤器，将数字转为对应的文字
 * 使用方法：
 * 1、最标准的vue的过滤器的使用方法。
 * 2、示例：{{item.academic | filter_academic}}
 */

export default {
  install: function (Vue, options) {
    // 学历的转换
    Vue.filter('filter_academic', function (item) {
      let template = {
        '0': '不限',
        '1': '大专',
        '2': '本科',
        '3': '硕士',
        '4': '博士'
      }
      if (item < 0 || item > 4) {
        return '错误的学历要求'
      } else {
        return template[String(item)]
      }
    })

    // 融资程度转换
    Vue.filter('filter_financing', function (item) {
      let template = {
        '0': '无限制',
        '1': '不需要融资',
        '2': '未融资',
        '3': '天使轮',
        '4': 'A轮',
        '5': 'B轮',
        '6': 'C轮',
        '7': 'D轮及以上',
        '8': '上市'
      }
      if (item < 0 || item > 8) {
        return '错误的融资程度'
      } else {
        return template[String(item)]
      }
    })

    // 职位类型转换
    Vue.filter('filter_jobType', function (item) {
      let template = {
        '0': '不限',
        '1': '全职',
        '2': '兼职',
        '3': '实习',
        '4': '私活',
        '5': '其他'
      }
      if (item < 0 || item > 8) {
        return '错误的职位类型'
      } else {
        return template[String(item)]
      }
    })

    // 格式化工资
    Vue.filter('toFixedWage', function (number, afterComma = 0) {
      return Number(number / 1000).toFixed(afterComma) + 'k'
    })

    // 工作经验
    Vue.filter('filter_minYear', function (number) {
      if (number === 0) {
        return '经验不限'
      } else {
        return '至少' + number + '年'
      }
    })

    // 格式化时间
    Vue.filter('filter_time', function (time) {
      /**
       * 作者：姜凯丽(452930228@qq.com)
       * 移植者：零零水(20004604@qq.com)
       * 处理时间显示形式
       * 转化成为 MM-DD HH: MM
       * 并将日期为今天，明天，昨天的时间转化成 如‘今天 HH: MM’的形式
       */
      let date = (typeof time === 'number') ? new Date(time) : new Date((time || '').replace(/-/g, '/'))
      let diff = (((new Date()).getTime() - date.getTime()) / 1000)
      let dayDiff = Math.floor(diff / 86400)
      let isValidDate = Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date.getTime())

      if (!isValidDate) {
        console.error('not a valid date')
        return time
      }
      let today = new Date(date)
      // let year = today.getFullYear()
      let month = ('0' + (today.getMonth() + 1)).slice(-2)
      let day = ('0' + today.getDate()).slice(-2)
      let hour = ('0' + today.getHours()).slice(-2)
      let minute = ('0' + today.getMinutes()).slice(-2)
      if (isNaN(dayDiff) || dayDiff < 0 || dayDiff > 3) {
        return `${month}-${day} ${hour}:${minute}`
      }
      return dayDiff === 0 && (
        diff < 86400 && `今天 ${hour}:${minute}`) ||
        dayDiff < 2 && `昨天 ${hour}:${minute}` ||
        dayDiff < 3 && `前天 ${hour}:${minute}` ||
        dayDiff >= 3 && `${month}-${day} ${hour}:${minute}`
    })
  }
}
