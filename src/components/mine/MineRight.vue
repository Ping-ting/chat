<template>
  <div id="mine-right-container">
    <!-- empty -->
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
    <!-- 我的资料 -->
    <div v-else-if="type === 'myInfo'" class="info-container">
      <div class="top">
            <div class="top-left">
              <h3>{{userInfo.Username}}&nbsp;
                <i v-if="userInfo.Gender === '男'" class="el-icon-user-solid" style="font-size:18px;color:#1890ff;"></i>
                <i v-else class="el-icon-user-solid" style="font-size:18px;color:#F56C6C;"></i>
              </h3>
              <p>{{userInfo.Slogan}}</p>
            </div>
            <el-avatar
            class="friend-avatar"
            shape="square"
            :src="userInfo.Icon"
            :size="90"
            ></el-avatar>
          </div>
          <el-divider></el-divider>
          <div class="middle">
            <el-descriptions :column="1">
              <el-descriptions-item label="用户名">{{userInfo.Username}}</el-descriptions-item>
              <el-descriptions-item label="生日">{{userInfo.Birthday}}</el-descriptions-item>
              <el-descriptions-item label="职业">{{userInfo.Job}}</el-descriptions-item>
              <el-descriptions-item label="账号">{{userInfo.Phone}}</el-descriptions-item>
              <el-descriptions-item label="地区">{{userInfo.Address}}</el-descriptions-item>
          </el-descriptions>
          </div>
          <el-divider></el-divider>
    </div>
    <div v-else-if="type === 'changeInfo'">
      <div class="header-container">
        <el-page-header @back="goBack" content="修改信息">
        </el-page-header>
      </div>
      <div class="change-info-container">
        <el-form ref="form" :model="changeInfoForm" label-width="80px">
          <el-form-item style="width:50%" label="昵称">
            <el-input  v-model="changeInfoForm.Username"></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-radio-group v-model="changeInfoForm.Gender">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item style="width:92%" label="生日">
            <el-col :span="11">
              <el-date-picker type="date" v-model="changeInfoForm.Birthday" style="width: 100%;"></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item style="width:50%" label="职业">
            <el-select v-model="changeInfoForm.Job">
              <el-option label="学生" value="学生"></el-option>
              <el-option label="老师" value="老师"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="地区">
            <el-cascader
              style="width:76%"
              v-model="changeInfoForm.Address"
              :options="region"
              separator="-"
            ></el-cascader>
          </el-form-item>
          <el-form-item style="width:80%" label="个性签名">
            <el-input type="textarea" v-model="changeInfoForm.Slogan"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button :disabled="submitChangeFormBtn" style="width:76%;margin-top:20px" type="primary" @click="submitChangeForm">确认修改</el-button>
          </el-form-item>
        </el-form>
        <div class="avatar-container">
          <el-avatar
          shape="square"
          class="friend-avatar"
          :size="80"
          :src="userInfo.Icon"
          ></el-avatar>
          <el-button size="mini" plain @click="changeAvatarBtn">修改头像</el-button>
        </div>
      </div>
    </div>
    <el-dialog
    center
    title="上传新头像"
    width="300px"
    :visible.sync="uploadNewAvatarDialog"
    :append-to-body="true"
    >
    <div class="change-avatar-container">
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
      <el-button plain @click="submitAvatar">确定修改</el-button>
    </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import array from '@/assets/js/region.js'
export default {
  data () {
    return {
      rightEmptyImg: require('@/assets/image/mineRightEmptyImg.png'),
      region: array,
      submitChangeFormBtn: true,
      uploadNewAvatarDialog: false,
      newAvatar: null,
      imageUrl: '',
      changeInfoForm: {
        Username: '',
        Gender: '',
        Slogan: '',
        Address: '',
        Job: '',
        Birthday: ''
      }
    }
  },
  computed: {
    ...mapState('mineAbout', ['type', 'friendMessages', 'groupMessages']),
    ...mapState('userAbout', ['userInfo'])
  },
  created () {
    // 将表单默认值设置成userInfo
    const keys = Object.keys(this.changeInfoForm)
    for (const key of keys) {
      if (key !== 'Address') {
        this.changeInfoForm[key] = this.userInfo[key]
      }
    }
    this.changeInfoForm.Address = this.userInfo.Address.split('-')
  },
  watch: {
    changeInfoForm: {
      handler (newValue) {
        // 如果和userInfo中的不一样 才可以提交
        let flag = 0
        const keys = Object.keys(newValue)
        // console.log([...newValue.Address].join('-'))
        const newAddress = [...newValue.Address].join('-')
        for (const key of keys) {
          if (key !== 'Address') {
            if (newValue[key] !== this.userInfo[key]) {
              this.submitChangeFormBtn = false
              flag = 1
            }
          } else {
            if (newAddress !== this.userInfo.Address) {
              this.submitChangeFormBtn = false
              flag = 1
            }
          }
        }
        if (!flag) this.submitChangeFormBtn = true
      },
      deep: true,
      immediate: false
    }
  },
  methods: {
    // 同意提示
    successMsg (msg) {
      this.$message({
        message: msg,
        type: 'success'
      })
    },
    // 拒绝提示
    warningMsg (msg) {
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
        this.warningMsg('已拒绝该申请！')
      } else {
        this.successMsg('已同意该申请！')
      }
    },
    // 提交修改普通信息的表单
    submitChangeForm () {
      console.log(this.changeInfoForm)
      this.successMsg('信息修改成功！')
    },
    // 点击修改头像按钮 显示弹窗
    changeAvatarBtn () {
      this.uploadNewAvatarDialog = true
    },
    // 选择图片
    changeAvatar (file) {
      console.log(file.raw.type)
      console.log(file.raw.size)
      if (file.raw.type !== 'image/jpeg') {
        this.errorMsg('选择头像失败！请选择图片！')
      } else {
        this.successMsg('头像选择成功！')
        this.imageUrl = URL.createObjectURL(file.raw)
        this.newAvatar = file.raw
      }
    },
    submitAvatar () {
      const formData = new FormData()
      formData.append('avatar', this.newAvatar)
      this.successMsg('头像修改成功！')
      this.uploadNewAvatarDialog = false
    }
  }
}
</script>

<style lang="less" scoped>
.change-avatar-container{
  // background-color: #838383;
  width: 130px;
  margin: 0 auto;
  button{
    margin-top: 40px;
    width: 100%;
  }
}
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
  // background-color: #fff;

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
.info-container{
  height: 600px;
  overflow: hidden;
  background-color: rgba(255,255,255,1);
  padding: 20px;
}
.info-container{
  height: 600px;
  overflow: hidden;
  background-color: rgba(255,255,255,1);
  padding: 20px;
}
.change-info-container{
  height: 540px;
  overflow: hidden;
  background-color: rgba(255,255,255,1);
  padding: 40px;
  padding-left: 60px;
  position: relative;
  .avatar-container{
    width: 80px;
    position: absolute;
    top: 7%;
    right:25%;
    button{
      width: 100%;
      margin-top: 10px;
    }
  }
}
.top{
  margin-top: 10%;
  height: 20%;
  .top-left{
    width: 80%;
    height: 100%;
    display: inline-block;
    h3{
      color: #3c3c3c;
      font-size: 24px;
      font-weight: normal;
    }
    p{
      color: #838383;
      font-size: 16px;
    }
  }
  .friend-avatar{
    float: right;
  }
}
.middle{
  height: 30%;
  // background-color: antiquewhite;
}
/deep/ .avatar-uploader .el-upload {
  border: 2px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
/deep/ .avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
/deep/ .avatar-uploader-icon {
  font-size: 38px;
  color: #8c939d;
  width: 128px;
  height: 128px;
  line-height: 128px;
  text-align: center;
}
/deep/ .avatar {
  width: 128px;
  height: 128px;
  display: block;
}
</style>
