<template>
  <div style="margin-top:1.5rem">
    <el-steps
    :active="0"
    align-center
    >
      <el-step title="验证手机号"></el-step>
      <el-step title="设置密码"></el-step>
    </el-steps>
    <div id="form-container" style="margin-top:2rem">
      <Vcode
      :show="verifyDialogVisible"
      @success="verifySuccess"
      @close="verifyClose"
      ></Vcode>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="auto">
        <el-form-item prop="phoneNumber">
          <!-- 电话 input-->
          <el-input v-model="ruleForm.phoneNumber" placeholder="请输入手机号">
            <i slot="prefix" class="el-input__icon el-icon-mobile-phone"></i>
          </el-input>
          <!-- 获取验证码按钮 -->
          <el-button
          size="mini"
          class="getCodeButton"
          :disabled="attcode"
          v-if="showBtn"
          @click="getCode"
          >获取验证码</el-button>
          <!-- 倒计时 -->
          <el-button
          class="getCodeButton"
          plain
          disabled
          v-else
          >{{codeMsg}}</el-button>
        </el-form-item>
        <!-- 验证码 input -->
        <el-form-item label="" prop="phoneCode">
          <el-input v-model="ruleForm.phoneCode" placeholder="请输入验证码">
            <i slot="prefix" class="el-input__icon el-icon-chat-dot-square"></i>
          </el-input>
        </el-form-item>
        <p>&nbsp;</p>
        <!-- 登录按钮 -->
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')" style="width:100%;">下一步</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import Vcode from 'vue-puzzle-vcode'
import { sendCode, registerFirst } from '@/api/register/register.js'

export default {
  components: {
    Vcode
  },
  data () {
    return {
      // 获取验证码按钮是否禁用
      attcode: true,
      // 获取验证码按钮是否展示
      showBtn: true,
      codeMsg: '获取验证码',
      verifyDialogVisible: false,
      // 倒计时
      codeSec: 60,
      ruleForm: {
        phoneNumber: '',
        phoneCode: ''
      },
      rules: {
        phoneNumber: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { pattern: /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/, message: '请正确填写您的手机号码', trigger: 'blur' }
        ],
        phoneCode: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { pattern: /^[0-9]{6}$/, message: '请填写有效的验证码', trigger: 'blur' }
        ]
      }
    }
  },
  watch: {
    // 监听手机号的输入 改变获取验证码的状态
    'ruleForm.phoneNumber': function (phoneNumber) {
      const reg = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
      const val = reg.test(phoneNumber)
      if (val) {
        this.attcode = false
      } else {
        this.attcode = true
      }
    }
  },
  methods: {
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
    // 用户通过了验证 关闭框框 发送验证码
    async verifySuccess () {
      // 通过验证后，需要手动隐藏模态框
      this.verifyDialogVisible = false
      // 发起请求获取验证码
      const { data: sendCodeData } = await sendCode(this.ruleForm.phoneNumber)
      console.log('注册发送验证码响应数据：', sendCodeData)
      if (sendCodeData.code === 0) {
        // 成功
        this.successMsg('验证码发送成功！')
        // 修改页面样式
        const timer = setInterval(() => {
          this.codeSec = this.codeSec - 1
          this.codeMsg = this.codeSec + 's后重试'
          this.showBtn = false
          if (this.codeSec === 0) {
            clearInterval(timer)
            this.codeSec = 60
            this.showBtn = true
          }
        }, 1000)
      } else {
        this.errorMsg('发送失败，请稍候再试！')
      }
    },
    verifyClose () {
      // 用户点击遮罩层，应该关闭模态框
      this.verifyDialogVisible = false
    },
    // 获取验证码
    getCode () {
      // 打开验证弹窗
      this.verifyDialogVisible = true
    },
    // 下一步
    async submitForm (formName) {
      console.log(this.ruleForm)
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          // 验证成功 下一步
          const { data: registerFirstData } = await registerFirst(this.ruleForm.phoneNumber, this.ruleForm.phoneCode)
          console.log('下一步响应数据：', registerFirstData)
          // 判断响应
          if (registerFirstData.code === 0) {
            // 成功
            this.successMsg('手机号验证成功！')
            // 1. 将手机号存到浏览器 2. 转到第二步
            sessionStorage.setItem('chatRegisterPhone', this.ruleForm.phoneNumber)
            location.hash = '/register/second'
          } else if (registerFirstData.code === 1) {
            this.errorMsg('手机号或验证码错误！')
          } else {
            this.errorMsg('验证码过期，请重新获取！')
          }
        } else {
          // 验证失败
          this.errorMsg('手机号或验证码格式有误！')
          return false
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .getCodeButton{
    box-sizing: border-box;
    position: absolute;
    height: 100%;
    right: 0;
    border-radius: 0;
  }
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
  /deep/ .el-step__head.is-process{
    color: #409eff;
    border-color: #409eff;
    font-size: 14px;
  }
  /deep/ .el-step__title.is-process{
    color: #409eff;
    font-size: 14px;
  }
  /deep/ .el-step__title.is-wait{
    font-size: 14px;
  }
</style>
