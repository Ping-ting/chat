<template>
  <div class="contact-item" @click="itemClick($event)" :ref="'item' + id">
    <el-avatar class="friend-avatar" :src="avatar"></el-avatar>
    <div class="list-each-right">
      <div :class="state"></div>
      <p class="friend-nickname">
        {{nickname}}
      </p>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: [
    'id',
    'avatar',
    'nickname',
    'state',
    'type',
    'obj'
  ],
  methods: {
    ...mapMutations('contactRightAbout', ['UP_DATE_TYPE', 'UP_DATE_isFriend', 'UP_DATE_isGroup', 'UP_DATE_USER', 'UP_DATE_GROUP']),
    itemClick (e) {
      console.log('obj', this.obj)
      // 1. 更新类型 type
      this.UP_DATE_TYPE(this.type)
      // 2. 更新 myFriend 或者 myGroup
      // 3. 更新 user 或者 group
      // 在左侧 list 点击到的都是已经添加的好友和群组
      if (this.type === 'user') {
        this.UP_DATE_isFriend(true)
        this.UP_DATE_USER(this.obj)
      } else if (this.type === 'group') {
        this.UP_DATE_isGroup(true)
        this.UP_DATE_GROUP(this.obj)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.contact-item{
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
  background-color: rgba(235, 235, 235, 0.4);
  margin: 5px  0;
}
.contact-item:hover{
  background-color: rgba(235, 235, 235, 0.7);
}
.contact-item-active{
  background-color: rgba(235, 235, 235, 0.7);
}
.list-each-right{
  width: 80%;
  height: 100%;
  position: absolute;
  right: -20px;
}
p.friend-nickname{
  padding: 0;
  margin: 0;
  width: 80%;
  line-height: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
  // background-color: aqua;
}
.online{
  width: 9px;
  height: 9px;
  border-radius: 4.5px;
  display: inline-block;
  background-color: rgb(76, 175, 80);
  position: absolute;
  top: 45%;
  left: -8%;
}
.offline{
  width: 9px;
  height: 9px;
  border-radius: 4.5px;
  display: inline-block;
  background-color: rgb(156, 166, 175);
  position: absolute;
  top: 45%;
  left: -8%;
}
</style>
