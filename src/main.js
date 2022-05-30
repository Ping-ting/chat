import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'

// ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import ChatWindow from 'vue-advanced-chat'
import 'vue-advanced-chat/dist/vue-advanced-chat.css'
// import Antd from 'ant-design-vue'
import AutoComplete from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

// Vue-socket.io
// import VueSocketIO from 'vue-socket.io'

Vue.use(ElementUI)
Vue.use(ChatWindow)
Vue.use(AutoComplete)
// Vue.use(Antd)
// Vue.use(
//   new VueSocketIO({
//     connection: '/socket'
//   })
// )
Vue.prototype.$message = ElementUI.Message
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
