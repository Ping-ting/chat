<template>
  <div id="chat-list-container" :span="7">
    <TopSearch></TopSearch>
    <div id="chat-list">
      <el-scrollbar>
        <div id="chat-list-in">
          <ChatListEach v-for="(item) in chatList"
          :key="item.id"
          :id="item.id"
          :avatar="item.avatar"
          :content="item.content"
          :nickname="item.nickname"
          :time="item.time"
          ></ChatListEach>
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
import TopSearch from '@/components/TopSearch.vue'
import ChatListEach from '@/components/message/ChatListEach.vue'
export default {
  components: {
    TopSearch,
    ChatListEach
  },
  data () {
    return {
      chatList: [
        {
          id: '1',
          avatar: require('@/assets/image/avatar.jpg'),
          nickname: '娉婷pingtingxxxxxxxxxxx',
          content: '哈哈哈啊也觉得',
          time: '17:12'
        },
        {
          id: '2',
          avatar: require('@/assets/image/avatar.jpg'),
          nickname: 'pingting',
          content: '哈哈哈啊好啊好啊好啊',
          time: '17:30'
        },
        {
          id: '3',
          avatar: require('@/assets/image/avatar.jpg'),
          nickname: '娉婷',
          content: '哈哈哈',
          time: '17:12'
        },
        {
          id: '4',
          avatar: require('@/assets/image/avatar.jpg'),
          nickname: '44',
          content: '哈哈哈',
          time: '17:12'
        },
        {
          id: '5',
          avatar: require('@/assets/image/avatar.jpg'),
          nickname: '5555',
          content: '哈哈哈',
          time: '17:12'
        },
        {
          id: '6',
          avatar: require('@/assets/image/avatar.jpg'),
          nickname: '6666666',
          content: '哈哈哈',
          time: '17:12'
        },
        {
          id: '7',
          avatar: require('@/assets/image/avatar.jpg'),
          nickname: '777',
          content: '哈哈哈',
          time: '17:12'
        },
        {
          id: '8',
          avatar: require('@/assets/image/avatar.jpg'),
          nickname: '8888',
          content: '哈哈哈',
          time: '17:12'
        },
        {
          id: '9',
          avatar: require('@/assets/image/avatar.jpg'),
          nickname: '999',
          content: '哈哈哈',
          time: '17:12'
        },
        {
          id: '10',
          avatar: require('@/assets/image/avatar.jpg'),
          nickname: '99',
          content: '哈哈哈',
          time: '17:12'
        },
        {
          id: '11',
          avatar: require('@/assets/image/avatar.jpg'),
          nickname: '1111',
          content: '哈哈哈',
          time: '17:12'
        },
        {
          id: '12',
          avatar: require('@/assets/image/avatar.jpg'),
          nickname: '12121',
          content: '哈哈哈',
          time: '17:12'
        },
        {
          id: '13',
          avatar: require('@/assets/image/avatar.jpg'),
          nickname: '13333',
          content: '哈哈哈',
          time: '17:12'
        }
      ]
    }
  },
  methods: {
  },
  create () {
    // 发起请求获取 chat-list
  }
}
</script>

<style lang="less" scoped>
#chat-list-container{
  height: 600px;
}
#chat-list{
  height: 540px;
  padding: 0 10px;
  margin-bottom: 100px;
}

/deep/ .el-scrollbar{
  height: 100%;
}
/deep/ .el-scrollbar__wrap { overflow: scroll; width: 110%; height: 100%;overflow-x: hidden; }
</style>
