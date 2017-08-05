/**
 * Created by 王冬 on 2017/8/5.
 * QQ: 20004604
 * weChat: qq20004604
 * 剪贴板功能，参数是文字，第二个参数是是否有成功后的提示，第三个是失败后是否有提示，默认都有
 * 使用示例：
 * this.$copy.copy('要复制的文字内容')
 */

export default {
  install: function (Vue, options) {
    Vue.prototype.$copy = {
      copy (text, successAlert = true, failAlert = true) {
        let isSuccess = false
        let tempDOM = document.createElement('textarea')
        document.getElementsByTagName('body')[0].appendChild(tempDOM)
        tempDOM.value = text
        let inp = tempDOM
        // 判断元素是否能被选中
        if (inp && inp.select) {
          // 选择文本
          inp.select()
          try {
            // 复制文本
            document.execCommand('copy')
            isSuccess = true
            if (successAlert) {
              alert('已成功复制到剪贴板')
            }
          } catch (err) {
            if (failAlert) {
              alert('你的浏览器不支持复制到剪贴板，请自行复制粘贴')
            }
          }
        } else {
          if (failAlert) {
            alert('你的浏览器不支持复制到剪贴板，请自行复制粘贴')
          }
        }
        tempDOM.remove()
        return isSuccess
      }
    }
  }
}
