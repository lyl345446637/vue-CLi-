import Vue from 'vue'
import VueRouter from 'vue-router'
// @ 表示 src 目录 , 他是 src 目录的路径别名
// @ 好处：不受当前文件路径影响
import Login from '@/views/login/' // 引入登陆页面
import Home from '@/views/home/' // 引入首页页面
import Layout from '@/views/layout/' // 引入首页层级页面
import Article from '@/views/article/' // 引入首页层级页面
Vue.use(VueRouter)

const routes = [
  {
    path: '/login', // 这个是登陆页面
    name: 'login',
    component: Login
  },
  {
    path: '/', // 主路由 ,下面children是子路由
    // 命名路由 layout 有一个默认子路由，名字无意义
    // 正确做法：如果有默认子路由，就不要给父路由起名字
    // name: 'Layout'
    component: Layout,
    children: [ // 子路由
      {
        // 我们通常会把根路径 / 设置为网站得首页
        // 为什么？因为我们在手动输入网址访问网站得时候，可以省略/
        // 如果你是别的名称则必须加上
        path: '', // path为空，会作为默认子路由渲染
        // 路由的名字时干什么的？
        name: 'home',
        component: Home
      },
      {
        path: '/article',
        name: 'article',
        component: Article
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
