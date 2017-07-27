/**
 * Created by 王冬 on 2017/7/19.
 * QQ: 20004604
 * weChat: qq20004604
 */

export default {
  install: function (Vue, options) {
    Vue.mixin({
      created () {
        // 将开发者添加到开发者列表里
        // 只要开发者在组件内的data属性里添加了developer属性，值为自己的名字，就可以在页脚显示
        if (this.developer) {
          this.$store.commit('addDeveloper', this.developer)
        }
      },
      destroyed () {
        // 将开发者添加到开发者列表里
        if (this.developer) {
          this.$store.commit('removeDeveloper', this.developer)
        }
      }
    })
  }
}
