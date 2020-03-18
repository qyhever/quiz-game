/**
 * 格式化枚举值
 * @param {Array} list 枚举值数组
 * @returns {Object} EnumAndArray {obj: {}, arr: []}
 */
function setEnumAndArray(list) {
  const obj = {}
  const arr = []
  list.forEach(item => {
    if (typeof item === 'object') {
      const label = item.v
      const value = item.k
      arr.push({ label, value })
      obj[value] = label
    }
  })
  return {
    obj,
    arr
  }
}

export const enumQuizStatus = setEnumAndArray([
  {k: 0, v: '参与竞猜'},
  {k: 1, v: '结算中'},
  {k: 2, v: '已结束'}
])
