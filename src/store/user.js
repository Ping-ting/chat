// 引入lodash
import _ from 'lodash'

const userOptions = {
  namespaced: true, // 开启命名空间
  state: {
    isLogin: false,
    userInfo: {
      id: '2',
      Icon: require('@/assets/image/avatar2.jpg'),
      Username: '娉婷',
      State: 'offline',
      Slogan: '这个人很懒，什么也没有留下',
      Gender: '女',
      Address: '陕西 西安',
      Job: '学生',
      Phone: '15665620118',
      Birthday: '2002-02-19'
    }
  },
  actions: {

  },
  mutations: {
    // 登录 登出
    LOGIN (state, value) {
      state.isLogin = true
    },
    LOGOUT (state, value) {
      state.isLogin = false
    },
    // 更新user信息 移除user信息
    UPDATE_USER_INFO (state, value) {
      state.userInfo = _.cloneDeep(value)
    },
    REMOVE_USER_INFO (state, value) {
      state.userInfo = null
    }
  }
}
export default userOptions
