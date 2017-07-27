/**
* Created by 于士博 on 2017/7/25.
* QQ: 491387425
* weChat: 491387425
* 组件 toast的 js代码
*
*/
import Vue from 'vue'
// 创建toast实例
const ToastConstructor = Vue.extend(require('./toast.vue'))
// 移除DOM的方法
let removeDom = event => {
  event.target.parentNode.removeChild(event.target)
}
// 给子实例的原型添加关闭的方法 本质上是移除DOM节点
ToastConstructor.prototype.close = function () {
  this.visible = false
  this.$el.addEventListener('transitionend', removeDom)
}
const Toast = (options = {}) => {
  // 新建一个toast组件的子实例挂载到一个新创建的div上
  let instance = new ToastConstructor().$mount(document.createElement('div'))
  let duration = options.duration || 2500
  instance.message = typeof options === 'string' ? options : options.message
  instance.position = options.position || 'middle'
  // 将新建的实例的DOM节点添加到document中
  document.body.appendChild(instance.$el)
  instance.visible = true
  // 更新DOM 定时器触发close的方法删除该DOM节点
  Vue.nextTick(() => {
    instance.timer = setTimeout(function () {
      instance.close()
    }, duration)
  })
  return instance
}
export default Toast
