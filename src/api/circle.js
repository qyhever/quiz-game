import request from '@/utils/request'

// 圈子动态
export const getCircleInfo = (data) => {
    return request({
        method: 'get',
        url: '/circle/info',
        params: data
    })
}

// 上传文件
export const uploadFile = (data) => {
    return request({
        method: "post",
        url: "/api/file",
        data
    })
}

// 圈子发布
export const releaseCircle = (data) => {
    return request({
        method: 'get',
        url: '/circle/post',
        params: data
    })
}

// 圈子-保存草稿
export const releaseCircleDraft = (data) => {
    return request({
        method: 'get',
        url: '/circle/draft',
        params: data
    })
}

