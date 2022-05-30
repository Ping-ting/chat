import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '@/router/routes.js'
// 导入查询token状态的api
// import { tokenStatus } from '@/api/token/token.js'
Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

// 前端路由守卫
router.beforeEach(async (to, from, next) => {
  // 当访问登录或者注册的时候 直接通过
  if (to.path.indexOf('/login') === 0 || to.path.indexOf('/register') === 0) {
    next()
  } else {
    const token = localStorage.getItem('chatToken')
    // 判断 token 是否有效
    // const { data: tokenStatusData } = await tokenStatus(token)
    const tokenStatusData = 1
    // 有并且有效才放行 否则跳到登录
    if (token && !tokenStatusData.code) {
      next()
    } else {
      next('/login')
    }
  }
})

export default router
