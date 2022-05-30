const mineOptions = {
  namespaced: true, // 开启命名空间
  state: {
    // 当前选中类型 empty friendMsg groupMsg myInfo changeInfo
    type: 'groupMsg',
    friendMessages: [
      {
        id: '312412',
        type: 'receive',
        friendInfo: {
          id: 'fdsvj',
          Icon: require('@/assets/image/avatar.jpg'),
          Username: '嘻嘻哈哈'
        },
        message: '你好，我是嘻嘻哈哈，请求添加你为好友',
        state: 0,
        time: '2022-03-30'
      },
      {
        id: '3412',
        type: 'receive',
        friendInfo: {
          id: 'fdsvj',
          Icon: require('@/assets/image/avatar.jpg'),
          Username: '嘻嘻哈哈'
        },
        message: '你好，我是嘻嘻哈哈，请求添加你为好友',
        state: 1,
        time: '2022-03-30'
      },
      {
        id: '31241322',
        type: 'receive',
        friendInfo: {
          id: 'fdsvj',
          Icon: require('@/assets/image/avatar.jpg'),
          Username: '嘻嘻哈哈'
        },
        message: '你好，我是嘻嘻哈哈，请求添加你为好友',
        state: 2,
        time: '2022-03-30'
      },
      {
        id: '31412',
        type: 'send',
        friendInfo: {
          id: 'fdsvj',
          Icon: require('@/assets/image/avatar.jpg'),
          Username: '嘻嘻哈哈'
        },
        message: '已发送验证消息',
        state: 0,
        time: '2022-05-12'
      },
      {
        id: '314324212',
        type: 'send',
        friendInfo: {
          id: 'fdsvj',
          Icon: require('@/assets/image/avatar.jpg'),
          Username: '嘻嘻哈哈'
        },
        message: '已发送验证消息',
        state: 1,
        time: '2022-05-12'
      },
      {
        id: '31232412',
        type: 'send',
        friendInfo: {
          id: 'fdsvj',
          Icon: require('@/assets/image/avatar.jpg'),
          Username: '嘻嘻哈哈'
        },
        message: '已发送验证消息',
        state: 2,
        time: '2022-05-12'
      },
      {
        id: '313e23412',
        type: 'send',
        friendInfo: {
          id: 'fdsvj',
          Icon: require('@/assets/image/avatar.jpg'),
          Username: '嘻嘻哈哈'
        },
        message: '已发送验证消息',
        state: 0,
        time: '2022-05-12'
      },
      {
        id: '312r324412',
        type: 'send',
        friendInfo: {
          id: 'fdsvj',
          Icon: require('@/assets/image/avatar.jpg'),
          Username: '嘻嘻哈哈'
        },
        message: '已发送验证消息',
        state: 0,
        time: '2022-05-12'
      },
      {
        id: '314342412',
        type: 'send',
        friendInfo: {
          id: 'fdsvj',
          Icon: require('@/assets/image/avatar.jpg'),
          Username: '嘻嘻哈哈'
        },
        message: '已发送验证消息',
        state: 0,
        time: '2022-05-12'
      }
    ],
    groupMessages: [
      {
        id: '11',
        type: 'receive',
        member: {
          id: 'fdsvj',
          Icon: require('@/assets/image/avatar.jpg'),
          Username: '嘻嘻哈哈'
        },
        group: {
          id: 'sdf',
          groupAvatar: require('@/assets/image/avatar2.jpg'),
          groupName: '茶话会'
        },
        message: 'hi，我是嘻嘻哈哈',
        state: 0,
        time: '2022-05-30'
      },
      {
        id: '12',
        type: 'receive',
        member: {
          id: 'fdsvj',
          Icon: require('@/assets/image/avatar.jpg'),
          Username: '嘻嘻哈哈'
        },
        group: {
          id: 'sdf',
          groupAvatar: require('@/assets/image/avatar2.jpg'),
          groupName: '茶话会'
        },
        message: 'hi，我是嘻嘻哈哈',
        state: 1,
        time: '2022-05-30'
      },
      {
        id: '13',
        type: 'receive',
        member: {
          id: 'fdsvj',
          Icon: require('@/assets/image/avatar.jpg'),
          Username: '嘻嘻哈哈'
        },
        group: {
          id: 'sdf',
          groupAvatar: require('@/assets/image/avatar2.jpg'),
          groupName: '茶话会'
        },
        message: 'hi，我是嘻嘻哈哈',
        state: 2,
        time: '2022-05-30'
      },
      {
        id: '14',
        type: 'send',
        member: {
          id: 'fdsvj',
          Icon: require('@/assets/image/avatar.jpg'),
          Username: '嘻嘻哈哈'
        },
        group: {
          id: 'sdf',
          groupAvatar: require('@/assets/image/avatar2.jpg'),
          groupName: '茶话会'
        },
        message: '已发送验证消息',
        state: 0,
        time: '2022-05-30'
      },
      {
        id: '15',
        type: 'send',
        member: {
          id: 'fdsvj',
          Icon: require('@/assets/image/avatar.jpg'),
          Username: '嘻嘻哈哈'
        },
        group: {
          id: 'sdf',
          groupAvatar: require('@/assets/image/avatar2.jpg'),
          groupName: '茶话会'
        },
        message: '已发送验证消息',
        state: 1,
        time: '2022-05-30'
      },
      {
        id: '16',
        type: 'send',
        member: {
          id: 'fdsvj',
          Icon: require('@/assets/image/avatar.jpg'),
          Username: '嘻嘻哈哈'
        },
        group: {
          id: 'sdf',
          groupAvatar: require('@/assets/image/avatar2.jpg'),
          groupName: '茶话会'
        },
        message: '已发送验证消息',
        state: 2,
        time: '2022-05-30'
      },
      {
        id: '17',
        type: 'normal',
        member: {
          id: 'fdsvj',
          Icon: require('@/assets/image/avatar.jpg'),
          Username: '嘻嘻哈哈'
        },
        group: null,
        message: '将你移出茶话会群聊',
        state: -1,
        time: '2022-05-30'
      },
      {
        id: '18',
        type: 'normal',
        member: {
          id: 'fdsvj',
          Icon: require('@/assets/image/avatar.jpg'),
          Username: '嘻嘻哈哈'
        },
        group: null,
        message: '已将茶话会群聊解散',
        state: -1,
        time: '2022-05-30'
      },
      {
        id: '19',
        type: 'normal',
        member: {
          id: 'fdsvj',
          Icon: require('@/assets/image/avatar.jpg'),
          Username: '嘻嘻哈哈'
        },
        group: null,
        message: '创建了茶话会群聊，并且拉了你',
        state: -1,
        time: '2022-05-30'
      },
      {
        id: '20',
        type: 'normal',
        member: {
          id: 'fdsvj',
          Icon: require('@/assets/image/avatar.jpg'),
          Username: '嘻嘻哈哈'
        },
        group: null,
        message: '已退出茶话会群聊',
        state: -1,
        time: '2022-05-30'
      }
    ]
  },
  actions: {
  },
  mutations: {
    UPDATE_TYPE (state, value) {
      console.log('UPDATE_TYPE', value)
      state.type = value
    }
  }
}
export default mineOptions
