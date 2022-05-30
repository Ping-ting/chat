import axios from 'axios'

// 调用 axios.create() 函数创建axios实例对象 request来接受
const request = axios.create({
  // 指定请求根路径
  baseURL: 'http://192.168.31.113:8080'
})

// 导出
export default request
