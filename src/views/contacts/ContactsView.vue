<template>
  <div id="contact-container">
    <el-row>
      <el-col :span="7">
        <ContactList></ContactList>
      </el-col>
      <el-col :span="17">
        <ContactRight></ContactRight>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ContactList from '@/components/contacts/ContactList.vue'
import ContactRight from '@/components/contacts/ContactRight.vue'
export default {
  components: {
    ContactList,
    ContactRight
  }
}
</script>

<style>
</style>
