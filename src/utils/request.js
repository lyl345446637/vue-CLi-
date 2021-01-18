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

// 导出请求方法
export default request

/* axios({
  method: '',
  url: '/a'
})

axios({
  method: '',
  url: '/b'
}) */

// axios({
//     method: '',
//     url: 'http://127.0.0.1:3000/a'
// })

// axios({
//     method: '',
//     url: 'http://127.0.0.1:3000/b'
// })

// 请求拦截器

// 响应拦截器

// 谁要使用谁就加载 request
//  import request from 'request.js'
//  request.xxx
//  request({
//      method: ,
//      url: ''
//  })
