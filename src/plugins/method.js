/**
 * global methods
 */
import { formatDate, formatDateTime } from '@/utils/date'
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
