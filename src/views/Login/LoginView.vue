<template>
  <div id="login-container">
    <div class="block">
      <el-image
      fit="cover"
      :src="loginImgSrc">
      <div slot="error" class="image-slot">
        <i class="el-icon-picture-outline"></i>
      </div>
      </el-image>
    </div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1"><router-link to="/login/notpassword">免密登录</router-link></el-menu-item>
      <el-menu-item index="2"><router-link to="/login/password">密码登录</router-link></el-menu-item>
      <h1> &nbsp; </h1>
      <h1> &nbsp; </h1>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </el-menu>
    <router-link to="/register" class="other-way">还没账号？点我注册</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginImgSrc: require('@/assets/image/login.png'),
      activeIndex: '1'
    }
  }
}
</script>

<style lang="less" scoped>
  #login-container{
    width: 300px;
    min-width: 300px;
    position: relative;
    left: 50%;
    top: 50vh;
    transform: translateX(-50%) translateY(-50%);
  }
  .el-menu-demo{
    a{
      text-decoration: none;
    }
  }
  .other-way{
    display: inline-block;
    width: 100%;
    text-align: center;
    padding-right: 0;
    font-size: 14px;
    line-height: 28px;
    color: rgba(0,0,0,0.80);
    text-decoration: none;
  }
  .other-way:hover{
    text-decoration-line:underline;
  }
  /deep/ .el-menu.el-menu--horizontal{
    border: none;
  }
</style>
