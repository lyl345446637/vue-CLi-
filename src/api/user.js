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
