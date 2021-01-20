/* 这是首页集控中心 */
/* template搭建div部分 */
<template>
    <el-container class="layout-Component">
    <el-aside class="aside" width="auto">
        <!-- 引入组件 -->
        <AppAside class="aside-main" :is-collapse="isCollapse" />
    </el-aside>
    <el-container>
        <el-header class="header">
          <div>
            <!--
              class 样式处理
                {
                  css类名: 布尔值
                }
                ture: 作用类名
                false: 不作用类名
            -->
            <i :class="{
              'el-icon-s-fold': !isCollapse,
              'el-icon-s-unfold': isCollapse
            }"
             @click="isCollapse = !isCollapse"></i>
            <span>后台维护系统</span>
          </div>
          <el-dropdown>
            <div class="avatar-wrap">
              <img class="avatar" :src="user.photo" alt=""/>
              <span>{{ user.name }}</span>
              <i class="el-icon-arrow-down el-icon--right"></i>
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人设置</el-dropdown-item>
              <!-- 组件默认不识别原生事件 除非内部做了处理-->
              <el-dropdown-item @click.native="onLogout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>
        <el-main class="main">
            <!-- 子路由出口 这里是home的 index.vue -->
            <router-view />
        </el-main>
    </el-container>
    </el-container>
</template>
/* script搭建js部分 */
<script>
import AppAside from './components/aside.vue'
import { getUserProfile } from '@/api/user'
export default {
  name: 'LayoutIndex',
  components: {
    AppAside
  },
  data () {
    return {
      user: {}, // 当前登陆用户信息
      isCollapse: false // 侧边状态栏展示状态
    }
  },
  created () {
    // 组件初始化好, 请求获取用户资料
    this.loadUserProfile()
  },
  methods: {
    // 除了登录接口外，其他所有接口都需要授权才能请求使用
    // 或者说，其他接口都需要提供你的身份令牌才能获取数据
    loadUserProfile () {
      getUserProfile().then(res => {
        // console.log(res)
        this.user = res.data.data
      })
    },
    onLogout () {
      this.$confirm('确认退出吗？', '退出提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 把用户的登陆状态清除
        window.localStorage.removeItem('user')

        // 跳转到登陆页面
        this.$router.push('/login')
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  }
}
</script>

<style scoped lang="less">
.layout-Component {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}
.aside {
    .aside-main {
        height: 100%;
    }
}
.header {
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    background-color: rgb(255, 255, 255);
}
.avatar-wrap{
    display: flex; // 弹性布局 https://www.cnblogs.com/hellocd/p/10443237.html
    align-items: center; // 上下居中
    .avatar{ //less写法
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 10px;
    }
}
.main {
    background-color: rgb(255, 255, 255);
}

</style>
