const contactRightOptions = {
  namespaced: true, // 开启命名空间
  state: {
    type: '', // user or group
    myFriend: false,
    myGroup: false,
    user: {
      id: '2',
      Icon: require('@/assets/image/avatar.jpg'),
      Username: '小开心',
      State: 'offline',
      Slogan: '这个人很懒，什么也没有留下',
      Gender: '女',
      Address: '陕西 西安',
      Job: '学生',
      Phone: '15665620118',
      Birthday: '2002-02-19'
    },
    group: {
      id: '1',
      groupAvatar: require('@/assets/image/avatar.jpg'),
      groupName: '茶话会',
      groupNumber: '12128973',
      groupSlogan: '唠嗑唠嗑',
      isController: false,
      controller: {
        id: '12',
        Icon: require('@/assets/image/avatar.jpg'),
        Username: '哈哈哈'
      },
      Type: 'group',
      createTime: '2022-05-08',
      users: [
        {
          id: '4fw',
          Icon: require('@/assets/image/avatar.jpg'),
          Username: '小开心'
        },
        {
          id: '45frq',
          Icon: require('@/assets/image/avatar.jpg'),
          Username: '小开心'
        },
        {
          id: '4314rr',
          Icon: require('@/assets/image/avatar.jpg'),
          Username: '小开心'
        },
        {
          id: '4314r34',
          Icon: require('@/assets/image/avatar.jpg'),
          Username: '小开心'
        },
        {
          id: '45421r',
          Icon: require('@/assets/image/avatar.jpg'),
          Username: '小开心'
        },
        {
          id: '4fd',
          Icon: require('@/assets/image/avatar.jpg'),
          Username: '小开心'
        },
        {
          id: '4343224',
          Icon: require('@/assets/image/avatar.jpg'),
          Username: '小开心'
        },
        {
          id: '45',
          Icon: require('@/assets/image/avatar.jpg'),
          Username: '小开心'
        },
        {
          id: '4324',
          Icon: require('@/assets/image/avatar.jpg'),
          Username: '小开心hhhhhh'
        },
        {
          id: '4vds',
          Icon: require('@/assets/image/avatar.jpg'),
          Username: '小开心'
        },
        {
          id: '45wqfe',
          Icon: require('@/assets/image/avatar.jpg'),
          Username: '小开心'
        },
        {
          id: '4vd',
          Icon: require('@/assets/image/avatar.jpg'),
          Username: '小开心'
        }
      ]
    }
  },
  actions: {
  },
  mutations: {
    UP_DATE_TYPE (state, value) {
      console.log('UP_DATE_TYPE')
      state.type = value
    },
    UP_DATE_isFriend (state, value) {
      console.log('UP_DATE_isFriend')
      state.myFriend = value
    },
    UP_DATE_isGroup (state, value) {
      console.log('UP_DATE_isGroup')
      state.myGroup = value
    },
    UP_DATE_USER (state, value) {
      console.log('UP_DATE_USER')
      state.user = value
    },
    UP_DATE_GROUP (state, value) {
      console.log('UP_DATE_GROUP')
      state.group = value
    }
  }
}
export default contactRightOptions
