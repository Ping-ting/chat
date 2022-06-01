<template>
    <div id="message-container">
        <chat-window
          :menu-actions='menuActions'
          :current-user-id="currentUserId"
          :rooms="rooms"
          :messages="messages"
          :username-options="usernameOptions"
          :rooms-loaded="true"
          :messages-loaded="messagesLoaded"
          :load-first-room="true"
          :auto-scroll="autoScroll"
          :room-actions="roomActions"
          :message-actions="messageActions"
          :message-selection-actions="messageSelectionActions"
          @send-message="sendMessage"
          @fetch-messages="fetchMessages"
          @edit-message="editMessage"
          @delete-message="deleteMessage"
          @send-message-reaction="sendMessageReaction"
          @room-action-handler="roomActionHandler"
          @menu-action-handler="menuActionHandler"
        >
        </chat-window>
      <!-- <el-col :span="7">
        <ChatList></ChatList>
      </el-col>
      <el-col :span="17">
        <ChatContent></ChatContent>
      </el-col> -->
    </div>
</template>

<script>
// import ChatList from '@/components/message/ChatList.vue'
// import ChatContent from '@/components/message/ChatContent.vue'
import _ from 'lodash'
export default {
  components: {
    // ChatList,
    // ChatContent
  },
  data () {
    return {
      messagesLoaded: true,
      // rooms 下拉框操作
      roomActions: [
        {
          name: 'deleteRoom',
          title: '删除对话'
        },
        {
          name: 'deleteMessage',
          title: '清除聊天记录'
        }
      ],
      // 聊天界面头部下拉
      menuActions: [
        // {
        //   name: 'inviteUser',
        //   title: 'Invite User'
        // },
        // {
        //   name: 'removeUser',
        //   title: 'Remove User'
        // },
        // {
        //   name: 'deleteRoom',
        //   title: 'Delete Room'
        // }
      ],
      // 发消息时滚动条的行为
      autoScroll: {
        send: {
          new: true, // will scroll down after sending a message
          newAfterScrollUp: false // will not scroll down after sending a message when scrolled up
        },
        receive: {
          new: false, // will not scroll down when receiving a message
          newAfterScrollUp: true // will scroll down when receiving a message when scrolled up
        }
      },
      // 消息下拉操作 回复 编辑 删除
      messageActions: [
        {
          name: 'replyMessage',
          title: 'Reply'
        },
        {
          name: 'editMessage',
          title: 'Edit Message',
          onlyMe: true
        },
        {
          name: 'deleteMessage',
          title: 'Delete Message',
          onlyMe: true
        }
      ],
      // 消息选择动作
      messageSelectionActions: [],
      rooms: [
        {
          roomId: 1,
          roomName: 'John Doe',
          avatar: require('@/assets/image/avatar2.jpg'),
          unreadCount: 4,
          index: 3,
          lastMessage: {
            content: 'Last message received',
            senderId: 1234,
            username: 'John Doe',
            timestamp: '10:21',
            saved: true,
            distributed: false,
            seen: false,
            new: true
          },
          users: [
            {
              _id: 1234,
              username: 'John Doe',
              avatar: require('@/assets/image/avatar2.jpg'),
              status: {
                state: 'offline',
                lastChanged: 'today, 14:30'
              }
            },
            {
              _id: 4321,
              username: 'John Snow',
              avatar: require('@/assets/image/avatar2.jpg'),
              status: {
                state: 'online',
                lastChanged: '14 July, 20:00'
              }
            }
          ],
          typingUsers: [1234]
        },
        {
          roomId: 2,
          roomName: 'PingTing',
          avatar: require('@/assets/image/avatar.jpg'),
          unreadCount: '99+',
          index: 4,
          lastMessage: {
            content: 'Last message received',
            senderId: 1234,
            username: 'John Doe',
            timestamp: '10:20',
            saved: true,
            distributed: false,
            seen: false,
            new: true
          },
          users: [
            {
              _id: 1234,
              username: 'John Doe',
              avatar: '',
              status: {
                state: 'offline'
              }
            },
            {
              _id: 4321,
              username: 'John Snow',
              avatar: '',
              status: {
                state: 'offline'
              }
            }
          ],
          typingUsers: [4321]
        }
      ],
      messages: [
        // {
        //   _id: 7890,
        //   content: 'Message 1',
        //   senderId: 1234,
        //   username: 'John Doe',
        //   avatar: require('@/assets/image/avatar2.jpg'),
        //   date: '10月22日',
        //   timestamp: '12:08',
        //   system: false,
        //   saved: true,
        //   distributed: true,
        //   seen: true,
        //   deleted: false,
        //   failure: false,
        //   disableActions: false,
        //   disableReactions: false,
        //   files: [
        //     {
        //       name: 'My File',
        //       size: 67351,
        //       type: 'png',
        //       audio: true,
        //       duration: 14.4,
        //       url: require('@/assets/image/avatar2.jpg'),
        //       preview: '',
        //       progress: 88
        //     }
        //   ],
        //   reactions: {
        //     '😁': [
        //       1234, // USER_ID
        //       4321
        //     ],
        //     '🥰': [
        //       1234
        //     ]
        //   },
        //   replyMessage: {
        //     content: 'Reply Message',
        //     senderId: 4321,
        //     files: [
        //       {
        //         name: 'My Replied File',
        //         size: 67351,
        //         type: 'png',
        //         audio: false,
        //         duration: 14.4,
        //         url: require('C:/Users/86156/Desktop/Matlab/1-01.png'),
        //         preview: '?'
        //       }
        //     ]
        //   }
        // },
        // {
        //   _id: 7891,
        //   content: 'Message 2',
        //   senderId: 4321,
        //   username: 'John Doe',
        //   avatar: require('@/assets/image/avatar2.jpg'),
        //   date: '10月22日',
        //   timestamp: '10:20',
        //   system: false,
        //   saved: true,
        //   distributed: true,
        //   seen: true,
        //   deleted: false,
        //   failure: false,
        //   disableActions: false,
        //   disableReactions: false
        // }
      ],
      currentUserId: 1234,
      usernameOptions: {
        minUsers: 3, currentUser: false
      }
    }
  },
  methods: {
    // 获取信息
    fetchMessages ({ room, options }) {
      console.log('fetchMessages', room, options)
      this.messagesLoaded = false
      this.messages.push({
        _id: (new Date()).getSeconds(),
        indexId: (new Date()).getSeconds(),
        content: 'Message 1',
        senderId: 4321,
        username: 'John Doe',
        avatar: require('@/assets/image/avatar.jpg'),
        date: '13 November',
        timestamp: (new Date()).getHours() + ':' + (new Date()).getMinutes() + ':' + (new Date()).getSeconds(),
        system: false,
        saved: true,
        distributed: true,
        seen: true,
        deleted: false,
        failure: false,
        disableActions: false,
        disableReactions: false,
        reactions: {
          '😆': [1234, 4321],
          '😛': [1234]
        }
      })
      this.messagesLoaded = true
      // use timeout to imitate async server fetched data
      // setInterval(() => {
      //   this.messages.push({
      //     _id: 7890,
      //     indexId: 12092,
      //     content: 'Message 1',
      //     senderId: 1234,
      //     username: 'John Doe',
      //     avatar: require('@/assets/image/avatar.jpg'),
      //     date: '13 November',
      //     timestamp: (new Date()).getHours() + ':' + (new Date()).getMinutes() + ':' + (new Date()).getSeconds(),
      //     system: false,
      //     saved: true,
      //     distributed: true,
      //     seen: true,
      //     deleted: false,
      //     failure: false,
      //     disableActions: false,
      //     disableReactions: false
      //   })
      //   this.messagesLoaded = true
      // }, 2000)
      // setInterval(() => {
      //   this.messages.push({
      //     _id: 7890,
      //     indexId: 12092,
      //     content: 'Message 1',
      //     senderId: 4321,
      //     username: 'John Doe',
      //     avatar: require('@/assets/image/avatar2.jpg'),
      //     date: '13 November',
      //     timestamp: (new Date()).getHours() + ':' + (new Date()).getMinutes() + ':' + (new Date()).getSeconds(),
      //     system: false,
      //     saved: true,
      //     distributed: true,
      //     seen: true,
      //     deleted: false,
      //     failure: false,
      //     disableActions: false,
      //     disableReactions: false
      //   })
      //   this.messagesLoaded = true
      // }, 100000)
    },
    // 发送消息
    sendMessage ({ roomId, content, files, replyMessage }) {
      console.log('roomId', roomId)
      console.log('content', content)
      console.log('files', files)
      console.log('replyMessage', replyMessage)
      if (!files) files = null
      if (!replyMessage) replyMessage = null
      this.messages.push({
        _id: (new Date()).getSeconds(),
        indexId: (new Date()).getSeconds(),
        content: content,
        senderId: 1234,
        username: 'PintTing',
        avatar: require('@/assets/image/avatar.jpg'),
        date: '13 November',
        timestamp: (new Date()).getHours() + ':' + (new Date()).getMinutes() + ':' + (new Date()).getSeconds(),
        system: false,
        saved: true,
        distributed: true,
        seen: true,
        deleted: false,
        failure: false,
        disableActions: false,
        disableReactions: false,
        reactions: {},
        files: files,
        replyMessage: replyMessage
      })
    },
    // 编辑消息
    editMessage ({ roomId, messageId, newContent, files, replyMessage, usersTag }) {
      console.log('编辑：', newContent, usersTag)
    },
    sendMessageReaction ({ roomId, messageId, reaction, remove }) {
      console.log('reaction：', reaction.unicode, messageId, remove)
      for (let i = 0; i < this.messages.length; i++) {
        if (messageId === this.messages[i]._id) {
          this.messages[i].content += 'reaction !!!'
          const obj = _.cloneDeep(this.messages[i].reactions)
          obj[reaction.unicode] = [this.currentUserId]
          this.messages[i].reactions = obj
          console.log(this.messages[i].reactions)
        }
      }
    },
    // 删除消息
    deleteMessage ({ roomId, message }) {
      console.log('删除：', roomId, message)
    },
    roomActionHandler ({ roomId, action }) {
      console.log('roomActionHandler', roomId, action.name)
    },
    menuActionHandler ({ roomId, action }) {
      console.log('menuActionHandler', roomId, action.name)
    }
  },
  mounted () {
    // console.log('🥰'.charCodeAt(0), String.fromCodePoint(55358))
  }
}
</script>

<style lang="less" scoped>
#message-container{
  border-radius: 4px;
  position: relative;
}
/deep/ .vac-box-footer{
  border-bottom-right-radius: 4px;
}
/deep/ .picker{
  position: absolute !important;
  top: 0 !important;
}
</style>
