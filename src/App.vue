<template>
   <div id="app">
      <h1>Vue后端页面开发学习初始模板</h1>
      <router-view/>
      <el-button round icon="el-icon-search">默认按钮</el-button>
      <el-input v-model="input" placeholder="请输入内容"></el-input>
      <el-button plain>朴素按钮</el-button>
      <el-input-number
        v-model="num"
        @change="handleChange"
        :min="1"
        :max="10"
        label="描述文字">
      </el-input-number>
   </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      input: '',
      num: 1
    }
  },
  methods: {}
}
</script>

<style lang="less"></style>
