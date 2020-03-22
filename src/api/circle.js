import request from '@/utils/request'

// 圈子动态
export const getCircleInfo = (data) => {
    return request({
        method: 'get',
        url: '/circle/info',
        params: data,
        requiredToken: data.type === 0
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
        method: 'post',
        url: '/circle/post',
        data
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
// 圈子关注列表
export const circleFollow = (data) => {
    return request({
        method: 'get',
        url: '/circle/follow',
        params: data
    })
}

// 圈子推荐列表
export const circleRecommend = (data) => {
    return request({
        method: 'get',
        url: '/circle/recommend',
        params: data,
        requiredToken: false
    })
}

// 圈子关注
export const addFollowCircle = (data) => {
    return request({
        method: 'post',
        url: '/user/addFollowCircle',
        data
    })
}
