/**
 * global methods
 */
import { formatDate, formatDateTime } from '@/utils/date'
import { isNumber } from '@/utils/type'
import Loading from '@/components/loading'
import Vue from 'vue'
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
Vue.prototype.isInFourDays = function(date) {
  const d = new Date(date)
  const diffTime = Math.abs(new Date().getTime() - d.getTime()) / 1000
  const fourDay = 60 * 60 * 24 * 4
  return diffTime >= fourDay
}
