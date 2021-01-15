/* template搭建div部分 */
<template>
    <div class="login-container">
        <!-- <div class="logo"></div> -->
        <el-form class="lg-bg" ref="form" :model="user" >
            <el-form-item>
                <el-input
                  v-model="user.mobile"
                  placeholder="请输入手机号"
                ></el-input>
            </el-form-item>
            <el-form-item >
                <el-input
                  v-model="user.code"
                  placeholder="请输入验证码"
                ></el-input>
            </el-form-item>
            <el-form-item>
                <el-button
                  class="btn"
                  type="primary"
                  @click="onSubmit"
                >登陆</el-button>
            </el-form-item>
            <el-form-item>
                <el-checkbox
                  v-model="checked"
                >我已同意相关条款</el-checkbox>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import request from '@/utils/request.js'

export default {
  name: 'LoginIndex', // 这里命名后在vue调试中才可以看到这个文件得名字
  data () {
    return {
      user: {
        mobile: '', // 手机号
        code: '' // 验证码
      },
      checked: false // 默认不勾选
    }
  },
  methods: {
    onSubmit () {
      // 获取表单数据
      // 表单验证
      // 验证通过，提交登录
      // 处理后端响应效果
      // 成功
      // 失败
    }
  }
}
</script>

<style scoped lang="less">
/* 整个div */
.login-container{
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;  // 水平排列
    flex-direction: column; // 上下排列
    justify-content: center;
    align-items: center;
    background: url("./lg-bg.jpg") no-repeat;
    background-size: cover;
}
/* 输入框整个div */
.lg-bg{
    background-color: rgb(255, 255, 255);
    padding: 50px 50px 10px 50px;
    border-radius: 10px;
}
/* 登陆按钮 */
.btn{
    width: 100%;
}
/* logo */
.logo{
    height: 88px;
    width: 158px;
    background: url("./logo.png") no-repeat;
    background-size: cover;
    margin-bottom: 30px;
}
</style>
