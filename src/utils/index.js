
/**
 * 获取 base64 图片 URI
 * @param {String} str 源字符串
 * @return {String} URI
 */
export function getDataURI(str) {
  const prefix = 'data:image/jpeg;base64,'
  if (str.indexOf(prefix) === 0) {
    return str
  }
  return prefix + str
}

/**
 * 扁平数组 转 树状结构
 * @param {Array} list 源数组
 * @param {String|Number|null} id 父级ID值
 * @param {String} key 子级ID键
 * @param {String} parentKey 父级ID键
 * @return {Array} 树状数据 ep: listToTree([], null, 'id', 'parentId')
 */
export function listToTree(list, id, key, parentKey) {
  const ret = []
  const temp = list.filter(v => v[parentKey] === id)
  temp.forEach(item => {
    ret.push({
      ...item,
      children: listToTree(list, item[key], key, parentKey)
    })
  })
  return ret
}

/**
 * 货币格式化
 * @param {Number} value 数值
 * @param {String} currencyUnit 货币符号
 * @param {Number} decimals 小数位数
 * @returns {String} 结果
 */
export function currency(value, currencyUnit, decimals) {
  const digitsRE = /(\d{3})(?=\d)/g
  /* eslint-disable */
  if (!value) {
    value = 0
  }
  value = parseFloat(value)
  if (!isFinite(value) || (!value && value !== 0)) {
    return ''
  }
  // value = value > 0 ? value : 0
  currencyUnit = currencyUnit != null ? currencyUnit : '' // '¥'
  decimals = decimals != null ? decimals : 2
  const stringified = Math.abs(value).toFixed(decimals)
  const numInt = decimals ?
    stringified.slice(0, -1 - decimals) :
    stringified
  const i = numInt.length % 3
  const head = i > 0 ?
    (numInt.slice(0, i) + (numInt.length > 3 ? ',' : '')) :
    ''
  const numFloat = decimals ?
    stringified.slice(-1 - decimals) :
    ''
  const sign = value < 0 ? '-' : ''
  return sign + currencyUnit + head +
    numInt.slice(i).replace(digitsRE, '$1,') +
    numFloat
}

export function secondToTime(value) {
  const d = Math.floor(value / 3600 / 24)
  let h = Math.floor(value / 3600 % 24)
  h = h < 10 ? '0' + h : h
  let m = Math.floor(value / 60 % 60)
  m = m < 10 ? '0' + m : m
  let s = Math.floor(value % 60)
  s = s < 10 ? '0' + s : s
  return d + '天 ' + h + ':' + m + ':' + s
}
