/**
 * global constants
 */
import Vue from 'vue'
import * as enums from '@/utils/enum'
Object.keys(enums).forEach(key => {
  Vue.prototype[key] = enums[key]
})
Vue.prototype.pageSizes = [ 10, 20, 30, 40 ]
Vue.prototype.QINIU_UPLOAD_URL = 'https://upload-z2.qiniup.com'
Vue.prototype.QINIU_PREFIX = 'https://qiniu.test.qyhever.com/'
