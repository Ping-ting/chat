<template>
  <div id="contact-container">
    <el-row>
      <el-col :span="7">
        <MineList></MineList>
      </el-col>
      <el-col :span="17">
        <MineRight></MineRight>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MineList from '@/components/mine/MineList.vue'
import MineRight from '@/components/mine/MineRight.vue'
export default {
  components: {
    MineList,
    MineRight
  }
}
</script>

<style>

</style>
