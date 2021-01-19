/* 这是首页左侧导航的部分 */
<template>
<!-- 以下来源于el官方组件代码 -->
<!-- default-active控制当前导航是否高亮 -->
<el-menu
    class="nav-menu"
    default-active="/"
    @open="handleOpen"
    @close="handleClose"
    background-color="#001d35"
    text-color="#fff"
    active-text-color="#ffd04b"
    router
>

    <el-menu-item index="/">
    <i class="iconfont iconshouye1"></i>
    <span slot="title">首页</span>
    </el-menu-item>
    <el-menu-item index="/article">
    <i class="el-icon-document"></i>
    <span slot="title">内容管理</span>
    </el-menu-item>
    <el-menu-item index="/image">
    <i class="el-icon-setting"></i>
    <span slot="title">素材管理</span>
    </el-menu-item>
    <el-menu-item index="pablish">
    <i class="el-icon-setting"></i>
    <span slot="title">发布文章</span>
    </el-menu-item>
    <el-menu-item index="/comment">
    <i class="el-icon-setting"></i>
    <span slot="title">评论管理</span>
    </el-menu-item>
    <el-menu-item index="/fans">
    <i class="el-icon-setting"></i>
    <span slot="title">粉丝管理</span>
    </el-menu-item>
    <el-menu-item index="/settings">
    <i class="el-icon-setting"></i>
    <span slot="title">个人设置</span>
    </el-menu-item>

</el-menu>
</template>

<script>
export default {
  name: 'AppAside',
  data () {
    return {}
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style scoped lang="less">
.nav-menu {
    .iconfont {
        margin-right: 5px;
        padding-left: 5px;
    }
}
</style>
