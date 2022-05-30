// 登录相关接口
import request from '@/utils/request.js'
//  post 请求需要来设置参数的插件
const qs = require('qs')

// 测试接口
export const test = function () {
  return request.post('/testGet', qs.stringify({
    Phone: '15665620117'
  }))
}
// Phone=15665620117&State=12

// 发送验证码
export const sendCode = function (phone) {
  return request.get('/login/sendcode', {
    params: {
      phone: phone
    }
  })
}

// 验证码登录
export const loginNotPassword = function (phone, code) {
  return request.post('/login/notpassword', qs.stringify({
    phone: phone,
    code: code
  }), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

// 密码登录
export const loginPassword = function (phone, password) {
  return request.post('/login/password', qs.stringify({
    phone: phone,
    password: password
  }), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}
