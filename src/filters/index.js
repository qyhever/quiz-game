import Vue from 'vue'
import * as enums from '@/utils/enum'
import { formatDate, formatDateTime } from '@/utils/date'
import { currency } from '@/utils'

const filters = {
  formatDate,
  formatDateTime,
  currency
}

// add enum filters
Object.keys(enums).forEach(key => {
  const filterName = key.replace('enum', 'filter')
  filters[filterName] = value => {
    if (value === undefined || value === null) {
      return ''
    }
    return enums[key].obj[String(value)]
  }
})
// register filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
