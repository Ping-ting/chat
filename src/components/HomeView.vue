<template>
  <div id="home-container-parents">
      <div id="home-container">
        <el-row>
          <el-col :span="2">
            <LeftMenu></LeftMenu>
          </el-col>
          <el-col :span="22">
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </el-col>
        </el-row>
      </div>
  </div>
</template>

<script>
import { test } from '@/api/login/login.js'
import LeftMenu from '@/components/LeftMenu.vue'
export default {
  data () {
    return {
      homeBgc: require('@/assets/image/homeBgc01.jpg')
    }
  },
  components: {
    LeftMenu
  },
  async created () {
    console.log('Home created')
    try {
      const { data: res } = await test()
      console.log('test数据：', res)
    } catch (e) {
      console.log(e)
    }
  },
  beforeDestroy () {
    console.log('清除vuex，token')
  }
}
</script>

<style lang="less" scoped>
  #home-container-parents{
    position: relative;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: url(@/assets/image/homeBgc01.jpg) no-repeat;
    background-size: cover;
  }
  #home-container{
    width: 950px;
    min-width: 950px;
    height: 600px;
    // 水平垂直居中
    position: absolute;
    top: 50vh;
    left: 50vw;
    transform: translateX(-50%) translateY(-50%);
    // 背景模糊
    backdrop-filter: blur(10px);
    box-shadow: 0 20px 15px rgba(0,0,0,0.3);
    border-radius: 8px;
    overflow:hidden;
  }

</style>
