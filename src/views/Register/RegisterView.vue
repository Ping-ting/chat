<template>
  <div id="register-container">
    <div class="block">
      <el-image
      fit="cover"
      :src="loginImgSrc">
      <div slot="error" class="image-slot">
        <i class="el-icon-picture-outline"></i>
      </div>
      </el-image>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <router-link to="/login" class="other-way">已有账号？点我登录</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginImgSrc: require('@/assets/image/login.png')
    }
  }
}
</script>

<style lang="less" scoped>
  // 注册容器
  #register-container{
    width: 300px;
    min-width: 300px;
    position: relative;
    left: 50%;
    top: 50vh;
    transform: translateX(-50%) translateY(-50%);
  }
  // 跳转登录链接样式
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
</style>
