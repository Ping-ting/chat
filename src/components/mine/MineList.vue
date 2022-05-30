<template>
  <div id="mine-list-container">
    <div id="create-group-container">
      <div id="inputGroup">
      <el-input v-model="createGroupInfo.name" placeholder="创建群聊"></el-input>
      </div>
      <el-button :disabled="createGroupBtn" size="mini" icon="el-icon-plus" circle @click="createGroup"></el-button>
    </div>
    <div id="list">
      <!-- 新朋友 -->
      <div class="contact-item" @click="changeType('friendMsg')">
        <el-avatar style="background-color:rgb(235, 47, 150);" shape="square" class="friend-avatar" icon="el-icon-star-on"></el-avatar>
        <div class="list-each-right">
          <p class="friend-nickname">
            新朋友
          </p>
        </div>
      </div>
      <!-- 群通知 -->
      <div class="contact-item" @click="changeType('groupMsg')">
        <el-avatar style="background-color:rgb(82, 196, 26);" shape="square" class="friend-avatar" icon="el-icon-message-solid"></el-avatar>
        <div class="list-each-right">
          <p class="friend-nickname">
            群通知
          </p>
        </div>
      </div>
      <!-- 我的资料 -->
      <div class="contact-item" @click="changeType('myInfo')">
        <el-avatar style="background-color:#1890ff;" shape="square" class="friend-avatar" icon="el-icon-user-solid"></el-avatar>
        <div class="list-each-right">
          <p class="friend-nickname">
            我的资料
          </p>
        </div>
      </div>
      <!-- 修改资料 -->
      <div class="contact-item" @click="changeType('changeInfo')">
        <el-avatar shape="square" class="friend-avatar" icon="el-icon-s-unfold"></el-avatar>
        <div class="list-each-right">
          <p class="friend-nickname">
            修改信息
          </p>
        </div>
      </div>
    </div>
    <!-- 创建群聊弹窗 -->
    <el-dialog
    center
    title="创建群聊"
    width="350px"
    :visible.sync="createGroupDialog"
    :append-to-body="true"
    >
    <div id="create-group-content">
      <!-- <h1>创建群聊</h1> -->
      <el-form label-position="top" label-width="300px" :model="createGroupInfo">
        <div class="info-container">
          <div id="avatar-container">
            <el-upload
            class="avatar-uploader"
            action="#"
            :auto-upload="false"
            :show-file-list="false"
            :on-change="changeAvatar"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </div>
          <div class="right-container">
            <h3>群名：{{createGroupInfo.name}}</h3>
            <span>群介绍：{{createGroupInfo.slogan}}<br></span>
            <span>点击左侧选择一张群头像</span>
          </div>
        </div>
        <el-form-item>
          <el-input v-model="createGroupInfo.slogan" placeholder="添加一些群介绍吧！"></el-input>
        </el-form-item>
        <el-form-item label="邀请一些好友吧！">
          <el-checkbox-group v-model="createGroupInfo.members">
            <div id="friend-list">
              <el-scrollbar>
              <el-checkbox label="3232123" name="type" style="width:100%">
                <div class="contact-item">
                  <el-avatar shape="square" class="friend-avatar" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                  <div class="list-each-right">
                    <p class="friend-nickname">
                      哈哈哈
                    </p>
                  </div>
                </div>
              </el-checkbox>
              <el-checkbox label="3232dfgd123" name="type" style="width:100%">
                <div class="contact-item">
                  <el-avatar shape="square" class="friend-avatar" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                  <div class="list-each-right">
                    <p class="friend-nickname">
                      哈哈哈
                    </p>
                  </div>
                </div>
              </el-checkbox>
              <el-checkbox label="32323" name="type" style="width:100%">
                <div class="contact-item">
                  <el-avatar shape="square" class="friend-avatar" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                  <div class="list-each-right">
                    <p class="friend-nickname">
                      哈哈哈
                    </p>
                  </div>
                </div>
              </el-checkbox>
              <el-checkbox label="32321" name="type" style="width:100%">
                <div class="contact-item">
                  <el-avatar shape="square" class="friend-avatar" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                  <div class="list-each-right">
                    <p class="friend-nickname">
                      哈哈哈
                    </p>
                  </div>
                </div>
              </el-checkbox>
              <el-checkbox label="323435321" name="type" style="width:100%">
                <div class="contact-item">
                  <el-avatar shape="square" class="friend-avatar" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                  <div class="list-each-right">
                    <p class="friend-nickname">
                      哈哈哈
                    </p>
                  </div>
                </div>
              </el-checkbox>
              </el-scrollbar>
            </div>
          </el-checkbox-group>
        </el-form-item>
          <el-button type="primary" @click="createGroupFromSubmit">立即创建</el-button>
      </el-form>
    </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      imageUrl: '',
      createGroupBtn: true,
      createGroupDialog: false,
      createGroupAvatar: null,
      createGroupInfo: {
        name: '',
        slogan: '',
        members: []
      }
    }
  },
  watch: {
    'createGroupInfo.name': function (value) {
      if (value !== '') {
        this.createGroupBtn = false
      } else {
        this.createGroupBtn = true
      }
    }
  },
  methods: {
    // 更新type的函数
    ...mapMutations('mineAbout', ['UPDATE_TYPE']),
    // 正确提示
    successMsg (msg) {
      this.$message({
        message: msg,
        type: 'success'
      })
    },
    // 错误提示
    errorMsg (msg) {
      this.$message({
        message: msg,
        type: 'error'
      })
    },
    // 创建群聊
    createGroup () {
      console.log('创建群聊', this.createGroupInfo.name)
      this.createGroupDialog = true
    },
    // 选择头像
    changeAvatar (file) {
      console.log(file.raw.type)
      console.log(file.raw.size)
      if (file.raw.type !== 'image/jpeg') {
        this.errorMsg('选择头像失败！请选择图片！')
      } else {
        this.successMsg('头像选择成功！')
        this.imageUrl = URL.createObjectURL(file.raw)
        this.createGroupAvatar = file
      }
    },
    // 提交表单
    createGroupFromSubmit () {
      console.log(this.createGroupInfo)
      const formData = new FormData()
      formData.append('name', this.createGroupInfo.name)
      formData.append('slogan', this.createGroupInfo.slogan)
      formData.append('members', JSON.stringify(this.createGroupInfo.members))
      formData.append('avatar', this.createGroupAvatar.raw)
      formData.forEach((key, val) => {
        console.log(key, val)
      })
    },
    changeType (type) {
      // 改变mine.js中的type mineRight 需要通过这个渲染样式
      this.UPDATE_TYPE(type)
    }
  }
}
</script>

<style lang="less" scoped>
#mine-list-container{
  height: 600px;
  background-color: #fff;
  overflow: hidden;
  border-right: solid 1px #e6e6e6;
  #create-group-container{
    background-color: #fff;
    padding: 10px;
    #inputGroup{
      width: 80%;
      display: inline-block;
      margin-right: 6%;
    }
  }
}
.info-container{
  margin-bottom: 20px;
  #avatar-container{
    width: 80px;
    height: 80px;
    // background-color: aqua;
    float: left;
  }
  .right-container{
    width: 60%;
    display: inline-block;
    margin-left: 5%;
    // background-color: rgb(203, 183, 183);
    p{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
#create-group-content{
  h1{
    text-align: center;
  }
  button{
    width: 100%;
  }
}
#friend-list{
  height: 210px;
}
/deep/ .el-dialog{
  margin-top: 10vh !important;
  margin-bottom: 0vh !important;
}
/deep/ .is-horizontal{
  display: none;
}
/deep/ span.el-checkbox__label{
  width: 260px !important;
  padding-left: 20px;
}
/deep/ .el-scrollbar{
  height: 100%;
}
/deep/ .el-scrollbar__wrap {
  overflow-y: scroll;
  width: 110%;
  height: 100%;
  overflow-x: hidden;
}

// item
#list{
  height: 540px;
  padding: 0 10px;
  margin-bottom: 100px;
}
.contact-item{
  width: 98%;
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
}
/deep/ .avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
/deep/ .avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
/deep/ .avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 78px;
  height: 78px;
  line-height: 78px;
  text-align: center;
}
/deep/ .avatar {
  width: 78px;
  height: 78px;
  display: block;
}
</style>
