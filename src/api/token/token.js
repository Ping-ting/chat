import request from '@/utils/request.js'

// 查询 token 状态
export const tokenStatus = function (token) {
  return request.get('/tokenstatus', {
    headers: {
      Authorization: 'Bearer ' + token
    }
  })
}
