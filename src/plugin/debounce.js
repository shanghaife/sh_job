/**
 * Created by 张帅 on 2017/8/18.
 * QQ: 3120921953
 * debounce 函数
 */

export default {
  install: function (Vue, options) {
    Vue.prototype.$debounce = {
      debounce (idle, action) {
        var last
        return function () {
          var ctx = this
          var args = arguments
          clearTimeout(last)
          last = setTimeout(function () {
            action.apply(ctx, args)
          }, idle)
        }
      }
    }
  }
}
