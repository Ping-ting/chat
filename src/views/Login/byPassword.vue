<template>
  <div id="form-container">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="auto">
        <el-form-item prop="phoneNumber">
          <!-- 电话 input-->
          <el-input v-model="ruleForm.phoneNumber" placeholder="请输入手机号">
            <i slot="prefix" class="el-input__icon el-icon-mobile-phone"></i>
          </el-input>
        </el-form-item>
        <!-- 验证码 input -->
        <el-form-item label="" prop="password">
          <el-input v-model="ruleForm.password" placeholder="请输入密码">
            <i slot="prefix" class="el-input__icon el-icon-lock"></i>
          </el-input>
        </el-form-item>
        <!-- 记住我 找回密码 -->
        <el-form-item label="" prop="type" style="margin-top:-1rem">
          <el-checkbox v-model="ruleForm.remember">记住我</el-checkbox>
          <router-link to="/" class="other-way find-password">找回密码</router-link>
        </el-form-item>
        <!-- 登录按钮 -->
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')" style="width:100%;">登录</el-button>
        </el-form-item>
      </el-form>
  </div>
</template>

<script>
import { encryptDes, decryptDes } from '@/utils/des.js'
import { loginPassword } from '@/api/login/login.js'
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      ruleForm: {
        phoneNumber: '',
        password: '',
        remember: false
      },
      rules: {
        phoneNumber: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { pattern: /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/, message: '请正确填写您的手机号码', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    ...mapMutations('userAbout', ['UPDATE_USER_INFO']),
    // 成功提示信息
    successMsg (message) {
      this.$message({
        showClose: true,
        message: message,
        type: 'success'
      })
    },
    // 失败提示信息
    errorMsg (message) {
      this.$message({
        showClose: true,
        message: message,
        type: 'error'
      })
    },
    // 登录
    async submitForm (formName) {
      console.log(this.ruleForm)
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          // 验证成功
          // 1.判断记住   记住 => 存到浏览器 不记住 => 从浏览器移除数据
          if (this.ruleForm.remember === true) {
            localStorage.setItem('chatAccount', JSON.stringify({
              phoneNumber: this.ruleForm.phoneNumber,
              password: encryptDes(this.ruleForm.password)
            }))
          }
          // 2.发送请求 判断响应
          const { data: passwordData } = await loginPassword(this.ruleForm.phoneNumber, this.ruleForm.password)
          console.log(passwordData)
          // 判断响应
          if (passwordData.code === 0) {
            // 成功
            this.successMsg('登录成功！')
            // 1.操作 Vuex 填写token
            // 2.连接
            // 3.跳转 home 并且提示
            this.UPDATE_USER_INFO(passwordData.user)
            localStorage.setItem('chatToken', passwordData.token)
            location.hash = '/home'
          } else {
            this.errorMsg('手机号或密码错误！')
          }
        } else {
          this.errorMsg('手机号或密码格式有误！')
        }
      })
    }
  },
  create () {
    // 判断浏览器中是否存了，存了就取出 => 解密 => 更新data数据
    const chatAccount = JSON.parse(localStorage.getItem('chatAccount'))
    if (chatAccount) {
      // 更新 data
      this.ruleForm.phoneNumber = chatAccount.phoneNumber
      this.ruleForm.password = decryptDes(chatAccount.password)
      console.log(this.phoneNumber, this.password)
    }
  }
}
</script>

<style lang="less" scoped>
  .other-way{
    display: inline-block;
    margin-left: 3.5rem;
    text-align: center;
    padding-right: 0;
    font-size: 14px;
    line-height: 2.5rem;
    color: rgba(0,0,0,0.80);
    text-decoration: none;
  }
  .other-way:hover{
    color: #409eff;
  }
  .find-password{
    position: absolute;
    right: 2rem;
  }
</style>
