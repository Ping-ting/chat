<template>
  <div id="mine-right-container">
    <div v-if="type === 'empty'">
      <el-image
      style="width: 70%;margin:25% 15%"
      :src="rightEmptyImg"
      ></el-image>
    </div>
    <!-- 新朋友 -->
    <div v-else-if="type === 'friendMsg'" class="message-container">
      <div class="header-container">
        <el-page-header @back="goBack" content="新朋友">
        </el-page-header>
      </div>
      <div class="message-list">
        <div class="message-item" v-for="message in friendMessages" :key="message.id">
          <el-avatar
          :size="46"
          :src="message.friendInfo.Icon"
          shape="square"
          class="friend-avatar"
          ></el-avatar>
          <div class="list-each-right">
            <p class="message-top">
              {{message.friendInfo.Username}}
              <span class="message-time"> &nbsp;&nbsp;&nbsp;{{message.time}}</span>
            </p>
            <p class="message-bottom">{{message.message}}</p>
          </div>
          <div class="message-state">
            <div v-if="message.state === 0">
              <div v-if="message.type === 'receive'">
                <el-link type="success" @click="handleMsg('friendMsg','accept',message.id)">同意</el-link>
                <el-link type="warning" @click="handleMsg('friendMsg','reject',message.id)">拒绝</el-link>
              </div>
              <div v-else-if="message.type === 'send'">
                <el-link :underline="false" type="info">验证中</el-link>
              </div>
            </div>
            <div v-else-if="message.state === 1">
              <div v-if="message.type === 'receive'">
                <el-link :underline="false" type="info">已同意</el-link>
              </div>
              <div v-else-if="message.type === 'send'">
                <el-link :underline="false" type="info">已添加</el-link>
              </div>
            </div>
            <div v-else-if="message.state === 2">
              <div v-if="message.type === 'receive'">
                <el-link :underline="false" type="info">已拒绝</el-link>
              </div>
              <div v-else-if="message.type === 'send'">
                <el-link :underline="false" type="info">被拒绝</el-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 群通知 -->
    <div v-else-if="type === 'groupMsg'">
      <div class="header-container">
        <el-page-header @back="goBack" content="群通知">
        </el-page-header>
      </div>
      <div class="message-list">
        <div class="message-item" v-for="message in groupMessages" :key="message.id">
          <!-- 发送的 头像展示 群头像 -->
          <el-avatar
          v-if="message.type === 'send'"
          :size="46"
          :src="message.group.groupAvatar"
          shape="square"
          class="friend-avatar"
          ></el-avatar>
          <!-- 收到的申请 普通消息 展示用户头像 -->
          <el-avatar
          v-else
          :size="46"
          :src="message.member.Icon"
          shape="square"
          class="friend-avatar"
          ></el-avatar>
          <div class="list-each-right">
            <p v-if="message.type === 'receive'" class="message-top">
              {{message.member.Username}} 申请加入 {{message.group.groupName}}
              <span class="message-time"> &nbsp;&nbsp;&nbsp;{{message.time}}</span>
            </p>
            <p v-else-if="message.type === 'send'" class="message-top">
              申请加入 {{message.group.groupName}}
              <span class="message-time"> &nbsp;&nbsp;&nbsp;{{message.time}}</span>
            </p>
            <p v-else-if="message.type === 'normal'" class="message-top">
              {{message.member.Username}}
              <span class="message-time"> &nbsp;&nbsp;&nbsp;{{message.time}}</span>
            </p>
            <p class="message-bottom">{{message.message}}</p>
          </div>
          <div class="message-state">
            <div v-if="message.state === 0">
              <div v-if="message.type === 'receive'">
                <el-link type="success" @click="handleMsg('groupMsg','accept',message.id)">同意</el-link>
                <el-link type="warning" @click="handleMsg('groupMsg','reject',message.id)">拒绝</el-link>
              </div>
              <div v-else-if="message.type === 'send'">
                <el-link :underline="false" type="info">验证中</el-link>
              </div>
            </div>
            <div v-else-if="message.state === 1">
              <div v-if="message.type === 'receive'">
                <el-link :underline="false" type="info">已同意</el-link>
              </div>
              <div v-else-if="message.type === 'send'">
                <el-link :underline="false" type="info">已加入</el-link>
              </div>
            </div>
            <div v-else-if="message.state === 2">
              <div v-if="message.type === 'receive'">
                <el-link :underline="false" type="info">已拒绝</el-link>
              </div>
              <div v-else-if="message.type === 'send'">
                <el-link :underline="false" type="info">被拒绝</el-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="type === 'myInfo'">
      <h1>我的资料</h1>
    </div>
    <div v-else-if="type === 'changeInfo'">
      <h1>修改信息</h1>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      rightEmptyImg: require('@/assets/image/mineRightEmptyImg.png')
    }
  },
  computed: {
    ...mapState('mineAbout', ['type', 'friendMessages', 'groupMessages'])
  },
  methods: {
    // 同意提示
    acceptMsg (msg) {
      this.$message({
        message: msg,
        type: 'success'
      })
    },
    // 拒绝提示
    rejectMsg (msg) {
      this.$message({
        message: msg,
        type: 'warning'
      })
    },
    ...mapMutations('mineAbout', ['UPDATE_TYPE']),
    goBack () {
      this.UPDATE_TYPE('empty')
    },
    handleMsg (type, kind, messageId) {
      console.log(type, kind, messageId)
      if (kind === 'reject') {
        this.rejectMsg('已拒绝该申请！')
      } else {
        this.acceptMsg('已同意该申请！')
      }
    }
  }
}
</script>

<style lang="less" scoped>
#mine-right-container{
  height: 600px;
  background-color: #fff;
}
// 头
.header-container{
  height: 60px;
  padding: 18px;
  border-bottom: solid 1px #e6e6e6;
}
// 状态渲染按钮
.message-state{
  // background-color: aquamarine;
  margin-right: 20px;
  a{
    margin-left: 10px;
  }
}
// 消息 item
.message-list{
  padding: 3px 20px;
  height: 540px;
  // background-color: red;
  overflow-y: scroll;
}
.message-item{
  width: 98%;
  height: 60px;
  display: flex;
  padding: 0 0 0 5px;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  background-color: rgba(235, 235, 235, 0.4);
  margin: 5px  0;
}
.list-each-right{
  width: 60%;
  height: 100%;
  // background-color: aquamarine;
  position: absolute;
  left: 60px;
}
.message-time{
  font-size: 12px;
}
.message-top{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
  margin: 8px 0 5px 0;
}
.message-bottom{
  margin-top: 0;
  font-size: 12px;
}
</style>
