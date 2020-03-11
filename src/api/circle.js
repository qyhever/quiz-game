import request from '@/utils/request'

// 圈子动态
export const getCircleInfo = (data) => {
    return request({
        method: 'get',
        url: '/circle/info',
        params: data
    })
}
