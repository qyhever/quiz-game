/**
 * 上传操作方法
 */
export function toArray(item) {
  if (Array.isArray(item)) {
    return item
  }

  return [item]
}
export function readFile(file, resultType) {
  return new Promise(function (resolve) {
    const reader = new FileReader()

    reader.onload = function (event) {
      resolve(event.target.result)
    }

    if (resultType === 'buffer') {
      reader.readAsArrayBuffer(file)
    } else if (resultType === 'text') {
      reader.readAsText(file)
    } else {
      reader.readAsDataURL(file)
    }
  })
}
export function isOversize(files, maxSize) {
  return toArray(files).some(function (file) {
    return file.size > maxSize
  })
}
const IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i
export function isImageUrl(url) {
  return IMAGE_REGEXP.test(url)
}
