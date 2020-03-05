// import Vue from 'vue'
import Clipboard from 'clipboard'

// function clipboardSuccess() {
//   Vue.prototype.$dialog({
//     message: '复制成功',
//     confirmButtonText: '确定'
//   })
// }

// function clipboardError() {
//   Vue.prototype.$dialog({
//     message: '复制失败',
//     confirmButtonText: '确定'
//   })
// }

export default function handleClipboard(text, event) {
  return new Promise((resolve, reject) => {
    const clipboard = new Clipboard(event.target, {
      text: () => text
    })
    clipboard.on('success', () => {
      // clipboardSuccess()
      resolve()
      clipboard.off('error')
      clipboard.off('success')
      clipboard.destroy()
    })
    clipboard.on('error', () => {
      reject()
      clipboard.off('error')
      clipboard.off('success')
      clipboard.destroy()
    })
    clipboard.onClick(event)
  })
}
