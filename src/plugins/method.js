/**
 * global methods
 */
import Vue from 'vue'
import { formatDate, formatDateTime } from '@/utils/date'
import { isNumber, isString } from '@/utils/type'
import Loading from '@/components/loading'
const transparentImage = require('@/assets/images/transparent.png')
Vue.prototype.formatDate = formatDate
Vue.prototype.formatDateTime = formatDateTime
Vue.prototype.$showModal = message => {
  Vue.prototype.$dialog({
    message,
    confirmButtonText: '我知道了'
  })
}
Vue.prototype.$loading = Loading
Vue.prototype.getQuizStatusClass = function(status) {
  if (!isNumber(status)) {
    return ''
  }
  return {
    0: '',
    1: 'button--settlement',
    2: 'button--end'
  }[status]
}
Vue.prototype.inInApplyHomeOwnerTime = function(date) {
  const d = new Date(date)
  const diffTime = Math.abs(new Date().getTime() - d.getTime()) / 1000
  const fourDay = 60 * 60 * 24 * 4
  const fiveDay = 60 * 60 * 24 * 5
  return diffTime >= fourDay && diffTime <= fiveDay // 差距时间 在距离比赛时间 5天 到 4天之间
}
Vue.prototype.getHtmlContent = function(str) {
  if (!isString(str)) {
    return ''
  }
  return str.replace(/<img/ig, '<img class="img-size"')
}
Vue.prototype.onImageError = `this.src = '${transparentImage}'`
Vue.prototype.getImage = function(url) {
  return url || transparentImage
}
