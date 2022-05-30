<template>
  <div class="list-each" @click="chatClick($event)" :ref="'chat' + id">
    <el-avatar class="friend-avatar" :src="avatar"></el-avatar>
    <div class="list-each-right">
      <p class="friend-nickname">{{nickname}}</p>
      <p class="last-msg">
        <span class="last-msg-content">{{content}}</span>
        <span class="last-msg-time">{{time}}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'id',
    'avatar',
    'nickname',
    'content',
    'time'
  ],
  methods: {
    chatClick (e) {
      // 0.修改样式 先获取到 vuex 中的当前 activeChat 去掉它的 class 再修改vuex 再添加class
      // 1.发起请求 获取chat内容
      // 2.修改 vuex
      this.$refs['chat' + this.id].style.backgroundColor = '#fff'
      console.log(this.id)
    }
  }
}
</script>

<style lang="less" scoped>
.list-each{
  width: 95%;
  height: 60px;
  display: flex;
  padding: 0 0 0 5px;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  background-color: rgba(255, 255, 255, 0.4);
  margin: 5px  0;
}
.list-each:hover{
  background-color: rgba(255, 255, 255, 0.7);
}
.list-each-active{
  background-color: rgba(255, 255, 255, 0.9);
}
.list-each-right{
  width: 80%;
  height: 100%;
  position: absolute;
  right: -10px;
}
.friend-nickname{
  width: 80%;
  line-height: 24px;
  margin-bottom: 5px;
  margin-top: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
}
.last-msg{
  margin-top: 0;
}
.last-msg-content{
  display: inline-block;
  width: 70%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
  color: rgb(75, 75, 75);
}
.last-msg-time{
  position: absolute;
  right: 17px;
  font-size: 12px;
  color: rgb(136, 136, 136);
}
</style>
