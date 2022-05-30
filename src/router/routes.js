// 这里放配置的路由

import Home from '@/components/HomeView.vue'

// Login 登录路由 子组件路由
import Login from '@/views/Login/LoginView.vue'
import Password from '@/views/Login/byPassword.vue'
import NotPassword from '@/views/Login/notByPassword.vue'

// Register 注册路由 子组件路由
import Register from '@/views/Register/RegisterView.vue'
import FirstStep from '@/views/Register/FirstStep.vue'
import SecondStep from '@/views/Register/SecondStep.vue'

// 主页子路由
// 信息
import Message from '@/views/message/MessageView.vue'

// 联系人
import Contacts from '@/views/contacts/ContactsView.vue'

// 朋友圈
import Circle from '@/views/circle/CircleView.vue'

// 我的
import Mine from '@/views/mine/MineView.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    redirect: '/home/message',
    children: [
      {
        path: 'message',
        component: Message
      },
      {
        path: 'contacts',
        component: Contacts
      },
      {
        path: 'circle',
        component: Circle
      },
      {
        path: 'mine',
        component: Mine
      }
    ]
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
export default routes
