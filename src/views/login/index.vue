/* template搭建div部分 */
<template>
    <div class="login-container">
        <!-- <div class="logo"></div> -->
        <!--
           配置Form表单验证 -> 人话就是 带*号的输入交互反馈
           1、必须给el-from 组件绑定 model 为表单数据对象
           2、给需要验证的表单项目 el-form-item 绑定 prop属性
              注意：prop属性需要指定表单对象中的数据名称
           3、通过 el-from 组建的 rules 属性配置验证规则

           手动触发表单验证
           1、给el-from 设置 ref 起个名字 (随意起名)
           2、通过 ref 获取 el-from 组件，调用组件的 validate进行验证
        -->
        <el-form
          class="lg-bg"
          ref="login-form"
          :model="user"
          :rules="formRules"
        >
            <el-form-item prop="mobile">
                <el-input
                  v-model="user.mobile"
                  placeholder="请输入手机号"
                ></el-input>
            </el-form-item>
            <el-form-item prop="code">
                <el-input
                  v-model="user.code"
                  placeholder="请输入验证码"
                ></el-input>
            </el-form-item>
            <el-form-item>
                <el-button
                  class="btn"
                  type="primary"
                  :loading="loginLoading"
                  @click="onLogin"
                >登陆</el-button>
            </el-form-item>
            <el-form-item prop="agree">
                <el-checkbox
                  v-model="user.agree"
                >我已阅读用户协议和隐私条款并同意</el-checkbox>
            </el-form-item>
        </el-form>
    </div>
</template>
/* script搭建js部分 */
<script>
import { login } from '@/api/user' // 加载模块

export default {
  name: 'LoginIndex', // 这里命名后在vue调试中才可以看到这个文件得名字
  data () {
    return {
      user: {
        mobile: '13911111111', // 手机号
        code: '246810', // 验证码
        agree: false // 是否同步协议
      },
      // checked: false, // 默认不勾选
      loginLoading: false, // 登陆的 loading 状态
      formRules: { // 表单验证规则配置
        // 要验证的数据名称: 规则列表[]
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          // required 是否为必填项  message 提示消息   trigger 验证机制，有多种
          { pattern: /^1[3|5|7|8|9]\d{9}$/, message: '请输入正确号码格式', trigger: 'change' }
          // parttern 正则表达式 翻译 第一位数必须为1 第二为必须为3579 后面为9位数
        ],
        code: [
          { required: true, message: '验证码不能为空', trigger: 'blur' },
          // required 是否为必填项  message 提示消息   trigger 验证机制
          { pattern: /^\d{6}$/, message: '请输入正确的验证码格式', trigger: 'change' }
          // parttern 正则表达式  6位数
        ],
        agree: [
          {
            // 自定义校验规则
            validator: (rule, value, callback) => {
              if (value) {
                callback()
              } else {
                callback(new Error('请勾选同意用户协议'))
              }
            },
            /* message: '请勾选同意  用户协议', */
            trigger: 'change'
          }
        ]
      }
    }
  },
  methods: {
    onLogin () {
      // 获取表单数据(根据借口要求绑定数据)
      /* const user = this.user */

      // 表单验证
      // validate 方法是异步的
      this.$refs['login-form'].validate((valid, err) => {
        if (!valid) {
          return
        }

        // 验证通过，提交登录
        this.login()
      })
      // 处理后端响应效果
      // 成功
      // 失败
    },
    login () { // 方法存进一个函数中后面调用
      // 开启登录中 loading...
      this.loginLoading = true
      // 对于代码中的请求操作
      // 1、接口请求可能需要重用
      // 2、实际工作中，接口非常容易变动
      // 建议把所有的请求都封装成函数 统一进行管理
      login(this.user).then(res => {
        console.log(res)

        // 账 13911111111 密 246810
        // 登录成功 -> 来自el官方组建的写法 复制
        this.$message({
          message: '登陆成功',
          type: 'warning'
        })

        // 关闭·loading
        this.loginLoading = false

        // 跳转到首页
        this.$router.push({
          name: 'home'
        })
      }).catch(err => {
        console.log('登陆失败', err)
        // 登录失败 -> 来自el官方组建的写法 复制
        this.$message.error('登录失败， 手机号或者验证码错误')

        // 关闭·loading
        this.loginLoading = false
      })
    }
  }
}
</script>
/* script搭建css部分 */
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

/* .logo{
    height: 88px;
    width: 158px;
    background: url("./logo.png") no-repeat;
    background-size: cover;
    margin-bottom: 30px;
} */
</style>
