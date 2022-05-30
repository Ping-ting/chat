import Vue from 'vue'
import Vuex from 'vuex'

import userOptions from './user.js'
import messageOptions from './message.js'
import contactRightOptions from './contactRight.js'
import mineOptions from './mine.js'

Vue.use(Vuex)

// 创建并导出 store
export default new Vuex.Store({
  modules: {
    userAbout: userOptions,
    messageAbout: messageOptions,
    contactRightAbout: contactRightOptions,
    mineAbout: mineOptions
  }
})
