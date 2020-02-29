import request from '@/utils/request'

export const getQiniuToken = () => {
  return request({
    url: '/qiniu_token',
    showLoading: false
  })
}
