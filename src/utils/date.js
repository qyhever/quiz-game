/**
 * 日期操作，基于dayjs
 */
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
dayjs.locale('zh-cn')

export const formatDate = (value = new Date(), str = 'YYYY-MM-DD') => {
  return dayjs(value).format(str)
}
export const formatDateTime = (value = new Date()) => {
  return dayjs(value).format('YYYY-MM-DD HH:mm:ss')
}

export const getMonthStartDay = (value = new Date(), str = 'YYYY-MM-DD') => {
  return dayjs(value).startOf('month').format(str)
}

export const getMonthEndDay = (value = new Date(), str = 'YYYY-MM-DD') => {
  return dayjs(value).endOf('month').format(str)
}

/**
 * 获取某月的天数
 * @param {Date} 时间参数
 * @return {Number} 天数
 */
export const getMonthDays = (date = new Date()) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  // 当天数为0 js自动处理为上一月的最后一天
  return new Date(year, month, 0).getDate()
}
