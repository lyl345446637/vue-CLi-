/* 用户登陆请求模块 */
/* export是导出的意思 */

// 用户登陆
import request from '@/utils/request.js'

export const login = data => {
  return request({
    method: 'POST',
    url: '/app/v1_0/authorizations',

    // data 用来设置 POST 请求体
    data
  })
}
/*
上面写法 和 下面写法一眼
export function login (data) {
  return request({
    method: 'POST',
    url: '/mp/v1_0/authorizations',

    // data 用来设置 POST 请求体
    data
  })
} */
// 获取用户信息
export const getUserProfile = () => {
  // json格式进行字符转化为对象
  // const user = JSON.parse(window.localStorage.getItem('user'))
  return request({
    method: 'GET',
    url: '/app/v1_0/user/profile'
    // 后端要求把需要授权的用户身份放到请求头中
    // axios 可以通过 hreders 选项设置请求头
    // headers: {
    //   // 属性名和值都得看接口的要求
    //   // 属性名:Authorization,接口的要求
    //   // 属性值:Bearer 空格 token 数据[密码]
    //   // Bearer 就是持票人的意思，就好比你学生证上写了学生证三个字
    //   // 因为用户是不用的所以const定义获取当前用户token值
    //   Authorization: `Bearer ${user.token}`
    // }
  })
}

// 修改用户信息
