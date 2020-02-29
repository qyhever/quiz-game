/**
 * dom操作
 */
function trim (str = '') {
  return str.replace(/\s+/g, '')
}
/**
 * 判断元素是否有某个类名
 * @param {HTMLElement} el dom元素
 * @param {String} cls 类名
 * @return {Boolean} 结果
 */
export function hasClass(el, cls) {
  if (!el || !cls) return false
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.')
  if (el.classList) {
    return el.classList.contains(cls)
  }
  return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1
}

/**
 * 添加类名
 * @param {HTMLElement} el dom元素
 * @param {String} cls 类名
 */
export function addClass(el, cls) {
  if (!el) return
  let curClass = el.className
  const classes = (cls || '').split(' ')

  for (let i = 0, j = classes.length; i < j; i++) {
    const clsName = classes[i]
    if (!clsName) continue

    if (el.classList) {
      el.classList.add(clsName)
    } else if (!hasClass(el, clsName)) {
      curClass += ' ' + clsName
    }
  }
  if (!el.classList) {
    el.className = curClass
  }
}

/**
 * 移除类名
 * @param {HTMLElement} el dom元素
 * @param {String} cls 类名
 */
export function removeClass(el, cls) {
  if (!el || !cls) return
  const classes = cls.split(' ')
  let curClass = ' ' + el.className + ' '

  for (let i = 0, j = classes.length; i < j; i++) {
    const clsName = classes[i]
    if (!clsName) continue

    if (el.classList) {
      el.classList.remove(clsName)
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(' ' + clsName + ' ', ' ')
    }
  }
  if (!el.classList) {
    el.className = trim(curClass)
  }
}
