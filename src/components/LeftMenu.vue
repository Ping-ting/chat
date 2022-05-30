<template>
  <div id="left-menu-container">
    <div class="avatar-container">
      <el-badge :value="2" class="item">
        <router-link to="/home/mine">
          <el-avatar class="avater" :src="userInfo.Icon"></el-avatar>
        </router-link>
      </el-badge>
    </div>
    <div class="menu-container">
      <el-menu
      router
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      >
        <el-menu-item index="/home/message">
          <i class="el-icon-chat-dot-round"></i>
        </el-menu-item>
        <el-menu-item index="/home/contacts">
          <i class="el-icon-notebook-1"></i>
        </el-menu-item>
        <el-menu-item index="/home/circle">
          <i class="el-icon-orange"></i>
        </el-menu-item>
        <!-- <el-menu-item index="/home/mine">
          <i class="el-icon-user"></i>
        </el-menu-item> -->
        <div class="setting">
          <el-menu-item index="/home/setting" @click="logoutClick">
            <i class="el-icon-switch-button"></i>
          </el-menu-item>
        </div>
      </el-menu>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      avatarSrc: ''
    }
  },
  computed:{
    ...mapState('userAbout',['userInfo'])
  },
  methods: {
    logoutClick () {
      console.log('退出')
    }
  }
}
</script>

<style scoped lang="less">
  .avatar-container{
    padding: 20px 20px;
    position: absolute;
  }
  .setting{
    margin-top: 160px;
    margin-bottom: 20px;
  }
  .menu-container{
    box-sizing: border-box;
    margin-top: 180px;
  }
  .el-menu{
    border: 0;
  }
  #left-menu-container{
    height: 600px;
    overflow: hidden;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    background-color: #fff;
    border-right: solid 1px #e6e6e6;
  }
</style>
