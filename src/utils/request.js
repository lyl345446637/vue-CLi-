/* 基于 axios 封装的请求模块 */
/* .VUE文件中 在 script 这么引用 import request from '@/utils/request.js' */

import axios from 'axios'

// 创建一个axios实列 ，就是复制一个axios
// 通过实列发送请求，按需要的配置给这个实列

const request = axios.create({
  baseURL: 'http://api-toutiao-web.itheima.net' // 请求的基础路径 是下面注释的简化版本
})

// 上面第二种写法
// const req1 = axios.create()
// req1.defaults.baseURL = 'http://api-toutiao-web.itheima.net'

// 请求拦截器
request.interceptors.request.use(
  // 任何所有请求会经过这里
  // config 是当前请求相关的配置信息对象
  // config 是可以修改的
  function (config) {
    // json格式进行字符转化为对象
    const user = JSON.parse(window.localStorage.getItem('user'))

    // 如果有登陆用户信息，则统一设置token
    if (user) {
      config.headers.Authorization = `Bearer ${user.token}`
    }

    // 然后我们就可以在允许请求出去之前定制统一业务功能处理
    // 列入： 统一的设置 token

    // 当这里reture config 之后请求才会真正发出去
    return config
  },
  // 请求失败，会经过这里
  function (error) {
    return Promise.reject(error)
  }
)

// 响应拦截器

// 谁要使用谁就加载 request
//  import request from 'request.js'
//  request.xxx
//  request({
//      method: ,
//      url: ''
//  })

// 导出请求方法
export default request
