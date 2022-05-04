import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/HomeView.vue'
import Login from '@/views/LoginView.vue'
import Register from '@/views/RegisterView.vue'

// Login 登录路由子组件路由
import Password from '@/views/Login/byPassword.vue'
import NotPassword from '@/views/Login/notByPassword.vue'

// Register 注册路由子组件路由
import FirstStep from '@/views/Register/FirstStep.vue'
import SecondStep from '@/views/Register/SecondStep.vue'

// 导入查询token状态的api
// import { tokenStatus } from '@/api/token/token.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    redirect: '/login/notpassword',
    children: [
      {
        path: 'notpassword',
        component: NotPassword
      },
      {
        path: 'password',
        component: Password
      }
    ]
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    redirect: '/register/first',
    children: [
      {
        path: 'first',
        component: FirstStep
      },
      {
        path: 'second',
        component: SecondStep
      }
    ]
  }
]

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
