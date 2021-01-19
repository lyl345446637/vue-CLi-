/* 用户登陆请求模块 */
/* export是导出的意思 */

// 用户登陆
import request from '@/utils/request.js'

export const login = data => {
  return request({
    method: 'POST',
    url: '/mp/v1_0/authorizations',

    // data 用来设置 POST 请求体
    data
  })
}

// 获取用户信息
export const getUserProfu = () => {
  return request({
    method: 'GET',
    url: '/mp/v1_0/user/profile',
    // 后端要求把需要授权的用户身份放到请求头中
    // axios 可以通过 hreders 选项设置请求头
    headers: {
      // 属性名和值都得看接口的要求
      // 属性名:Authorization,接口的要求
      // 属性值:Bearer 空格 token 数据[密码]
      Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MTEwNDM5OTcsInVzZXJfaWQiOjEsInJlZnJlc2giOmZhbHNlfQ.VuynFVCr_qlCUAVYIdVt3qJ440DsLldM3k7hViGbJew'
    }
  })
}

// 修改用户信息
