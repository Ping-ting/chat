<template>
  <div style="margin-top:1.5rem">
    <el-steps
    :active="1"
    align-center=""
    process-status="process"
    finish-status="success"
    >
      <el-step title="验证手机号"></el-step>
      <el-step title="设置密码"></el-step>
    </el-steps>
    <div id="form-container" style="margin-top:2rem">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm">
        <el-form-item prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="请设置新密码">
            <i slot="prefix" class="el-input__icon el-icon-lock"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" placeholder="请再次确认新密码">
            <i slot="prefix" class="el-input__icon el-icon-lock"></i>
          </el-input>
        </el-form-item>
        <p>&nbsp;</p>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')" style="width:100%">确定注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { registerSecond } from '@/api/register/register.js'

export default {
  data () {
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else if (this.checkPwd1(value) === false) {
        callback(new Error('密码长度必须大于6位'))
      } else if (this.checkPwd2(value) === false) {
        callback(new Error('密码必须包含大小写字母、数字和特殊字符'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        pass: '',
        checkPass: '',
        phone: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 验证密码是否符合要求
    checkPwd1 (password) {
      const reg = /\w{6,}/
      const val = reg.test(password)
      if (val) return true
      else return false
    },
    checkPwd2 (password) {
      const reg = /^.*(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*?])\w{6,}/
      const val = reg.test(password)
      if (val) return true
      else return false
    },
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
    async submitForm (formName) {
      console.log(this.$refs[formName])
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          // 发送请求设置密码
          this.ruleForm.phone = sessionStorage.getItem('chatRegisterPhone')
          console.log('从sessionStorage取出的phone:', this.ruleForm.phone)
          const { data: registerSecondData } = await registerSecond(this.ruleForm.phone, this.ruleForm.pass)
          console.log(registerSecondData)
          if (registerSecondData.code === 0) {
            // 注册成功 1.提示 2.跳转登录页面
            this.successMsg('注册成功，为您跳转登录页面！')
            location.hash = '/login'
          } else {
            this.errorMsg('注册失败，请稍后重试！')
          }
        } else {
          this.errorMsg('注册失败，密码格式有误！')
          return false
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  /deep/ .el-step__head.is-process{
    color: #409eff;
    border-color: #409eff;
  }
  /deep/ .el-step__title.is-process{
    color: #409eff;
    font-size: 14px;
  }
  /deep/ .el-step__title.is-success{
    font-size: 14px;
  }
</style>
