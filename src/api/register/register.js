// 注册相关接口
import request from '@/utils/request.js'
//  post 请求需要来设置参数的插件
const qs = require('qs')

// 发送验证码
export const sendCode = function (phone) {
  return request.get('/register/sendcode', {
    params: {
      phone: phone
    }
  })
}

// 第一步：验证手机号和验证码
export const registerFirst = function (phone, code) {
  return request.post('/register/first', qs.stringify({
    phone: phone,
    code: code
  }), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

// 第二步：设置密码
export const registerSecond = function (phone, password) {
  return request.post('/register/second', qs.stringify({
    phone: phone,
    password: password
  }), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}
