// 自定义指令 图片出错时 用这个图片替换 使用在标签里 v-imgerror
export const imgerror = {
  // inserted和update一起用 会有闪烁问题 防止ajax请求过慢 图片显示不出来
  // 指令所在的标签插入到DOM中的时候就会执行
  inserted (el, binding) {
    // el.src = binding.value
    el.onerror = function () {
      this.src = 'http://ihrm.itheima.net/static/img/head.b6c3427d.jpg'
    }
  },
  // 数据更新的时候就执行
  update (el, binding) {
    // el.src = binding.value
    el.onerror = function () {
      this.src = 'http://ihrm.itheima.net/static/img/head.b6c3427d.jpg'
    }
  }
}
