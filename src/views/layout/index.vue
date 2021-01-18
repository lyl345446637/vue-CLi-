/* 这是首页集控中心 */
/* template搭建div部分 */
<template>
    <el-container class="layout-Component">
    <el-aside class="aside" width="200px">
        <!-- 引入组件 -->
        <AppAside class="aside-main" />
    </el-aside>
    <el-container>
        <el-header class="header">Header</el-header>
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
export default {
  name: 'LayoutIndex',
  components: {
    AppAside
  },
  data () {
    return {}
  },
  methods: {}
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
    background-color: rgb(226, 83, 17);
    .aside-main {
        height: 100%;
    }
}
.header {
    background-color: rgb(196, 251, 255);
}
.main {
    background-color: rgb(255, 255, 255);
}

</style>
