/* template搭建div部分 */
<template>
    <el-container class="layout-Component">
    <el-aside class="aside" width="200px">Aside</el-aside>
    <el-container>
        <el-header class="header">Header</el-header>
        <el-main class="main">Main</el-main>
    </el-container>
    </el-container>
</template>
/* script搭建js部分 */
<script>
export default {
  name: 'LayoutIndex',
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
}
.header {
    background-color: rgb(0, 232, 248);
}
.main {
    background-color: rgb(0, 253, 148);
}
</style>
