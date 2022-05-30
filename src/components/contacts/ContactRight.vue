<template>
  <div id="contact-right-container">
    <div v-if="type === ''">
      <el-image
      style="width: 70%;margin:25% 15%"
      :src="rightEmptyImg"
      ></el-image>
    </div>
    <el-scrollbar v-else>
      <div style="padding: 0 20px">
        <!-- 用户 -->
        <div v-if="type === 'user'">
          <div class="top">
            <div class="top-left">
              <h3>{{user.Username}}&nbsp;
                <i v-if="user.Gender === '男'" class="el-icon-user-solid" style="font-size:18px;color:#1890ff;"></i>
                <i v-else class="el-icon-user-solid" style="font-size:18px;color:#F56C6C;"></i>
              </h3>
              <p>{{user.Slogan}}</p>
            </div>
            <el-avatar
            class="friend-avatar"
            shape="square"
            :src="user.Icon"
            :size="90"
            ></el-avatar>
          </div>
          <el-divider></el-divider>
          <div class="middle">
            <el-descriptions :column="1">
              <el-descriptions-item label="用户名">{{user.Username}}</el-descriptions-item>
              <el-descriptions-item label="生日">{{user.Birthday}}</el-descriptions-item>
              <el-descriptions-item label="职业">{{user.Job}}</el-descriptions-item>
              <el-descriptions-item label="账号">{{user.Phone}}</el-descriptions-item>
              <el-descriptions-item label="地区">{{user.Address}}</el-descriptions-item>
          </el-descriptions>
          </div>
          <el-divider></el-divider>
          <div class="bottom">
            <p v-if="myFriend">
              <el-button type="success" plain>发送消息</el-button>
              <el-button type="danger" plain>删除好友</el-button>
            </p>
            <p v-else>
              <el-button plain @click="add(1,user.id)">加好友</el-button>
            </p>
          </div>
        </div>
        <!-- 群组 -->
        <div v-else>
          <div class="top">
            <div class="top-left">
              <h3>{{group.groupName}}</h3>
              <p>{{group.groupSlogan}}</p>
            </div>
            <el-avatar
            class="friend-avatar"
            shape="square"
            :src="group.groupAvatar"
            :size="90"
            ></el-avatar>
          </div>
          <el-divider></el-divider>
          <div class="middle">
            <el-descriptions :column="2">
              <el-descriptions-item label="群主">
                <div class="user-item">
                  <el-avatar
                  class="friend-avatar"
                  shape="square"
                  :src="group.controller.Icon"
                  :size="44"
                  ></el-avatar>
                  <span>{{group.controller.Username}}</span>
                </div>
              </el-descriptions-item>
              <el-descriptions-item label="群号">{{group.groupNumber}}</el-descriptions-item>
              <el-descriptions-item label="创建日期">{{group.createTime}}</el-descriptions-item>
              <el-descriptions-item label="群人数">{{group.users.length}}</el-descriptions-item>
              <el-descriptions-item label="群成员">
              </el-descriptions-item>
            </el-descriptions>
            <div class="users-container">
              <div class="user-item" v-for="item in group.users" :key="item.id">
                <el-avatar
                class="friend-avatar"
                shape="square"
                :src="item.Icon"
                :size="44"
                ></el-avatar>
                <div class="delete" v-if="isEditing" @click="deleteUser(item.id,group.id)"><i class="el-icon-delete"></i></div>
                <span>{{item.Username}}</span>
              </div>
            </div>
          </div>
          <el-divider></el-divider>
          <div class="bottom">
            <p v-if="myGroup">
              <el-button type="success" plain>发送消息</el-button>
              <el-button v-if="group.isController" type="danger" plain>解散群聊</el-button>
              <el-button v-else  type="danger" plain>退出群聊</el-button>
              <el-button v-if="group.isController" type="danger" plain @click="editUsers">{{editMsg}}</el-button>
            </p>
            <p v-else>
              <el-button plain @click="add(2,group.id)">加入群聊</el-button>
            </p>
          </div>
        </div>
      </div>
    </el-scrollbar>
    <!-- 弹框 -->
    <el-dialog
      title=""
      width="300px"
      :modal="true"
      :visible.sync="addDialogVisible"
      :append-to-body="true"
    >
      <h1>{{dialogTitle}}</h1>
      <!-- 加好友 -->
      <div v-if="type === 'user'">
        <div class="info-container">
          <el-avatar
          class="friend-avatar"
          shape="square"
          :src="user.Icon"
          :size="80"
          ></el-avatar>
          <div class="right-container">
            <h3>{{user.Username}}&nbsp;
              <i v-if="user.Gender === '男'" class="el-icon-user-solid" style="font-size:18px;color:#1890ff;"></i>
              <i v-else class="el-icon-user-solid" style="font-size:18px;color:#F56C6C;"></i>
            </h3>
            <p>{{user.Slogan}}</p>
          </div>
        </div>
        <div class="send-msg-container">
          <el-form label-position="top" label-width="80px" :model="formData">
            <el-form-item label="请填写加好友验证消息：">
              <el-input v-model="formData.message" placeholder="介绍一下自己吧！"></el-input>
            </el-form-item>
            <p>
              <el-button type="primary" @click="submitForm('addFriend',user.id)">发送好友验证</el-button>
            </p>
          </el-form>
        </div>
      </div>
      <!-- 加群 -->
      <div v-else>
        <div class="info-container">
          <el-avatar
          class="friend-avatar"
          shape="square"
          :src="group.groupAvatar"
          :size="80"
          ></el-avatar>
          <div class="right-container">
            <h3>{{group.groupName}}</h3>
            <p>{{group.groupSlogan}}</p>
          </div>
        </div>
        <div class="send-msg-container">
          <el-form label-position="top" label-width="80px" :model="formData">
            <el-form-item label="请填写加群验证消息：">
              <el-input v-model="formData.message" placeholder="介绍一下自己吧！"></el-input>
            </el-form-item>
            <p>
              <el-button type="primary" @click="submitForm('addGroup',group.id)">发送加群申请</el-button>
            </p>
          </el-form>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
// 根据 vuex 中的内容去渲染 search 或者通讯录中的好友/群聊
import { mapState } from 'vuex'
export default {
  name: 'ContactRight',
  data () {
    return {
      isEditing: false, // 是否正在编辑
      editMsg: '编辑群成员', // 群组编辑按钮
      addDialogVisible: false, // 弹框是否显示
      dialogTitle: '', // 弹框标题
      formData: {
        message: ''
      },
      rightEmptyImg: require('@/assets/image/rightEmptyImg.png')
    }
  },
  computed: {
    ...mapState('contactRightAbout', ['type', 'myFriend', 'myGroup', 'user', 'group'])
  },
  methods: {
    // 编辑群成员按钮
    editUsers () {
      if (!this.isEditing) {
        this.isEditing = true
        this.editMsg = '取消编辑'
      } else {
        this.isEditing = false
        this.editMsg = '编辑群成员'
      }
    },
    // 删除群成员
    deleteUser (userId, groupid) {
      console.log('删除 成员id 群id：', userId, groupid)
    },
    // 1添加好友 / 2加入群聊  发送验证消息
    add (type, id) {
      this.addDialogVisible = true
      if (type === 1) {
        console.log('加好友：', id)
        this.dialogTitle = '添加好友'
      } else if (type === 2) {
        console.log('加群', id)
        this.dialogTitle = '申请加群'
      }
    },
    // 提交验证消息表单
    // 参数 1.addFriend / addGroup 2.user.id / group.id
    submitForm (type, id) {
      if (type === 'addFriend') {
        console.log('addFriend', id, this.formData.message)
      } else if (type === 'addGroup') {
        console.log('addGroup', id, this.formData.message)
      }
    }
  }
}
</script>

<style scoped lang="less">
.info-container{
  margin-bottom: 20px;
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
.send-msg-container{
  p{
    text-align: center;
    line-height: 50px;
    button{
      width: 100%;
    }
  }
}
/deep/ .el-scrollbar{
  height: 100%;
}
/deep/ .el-scrollbar__wrap { overflow: scroll; width: 103%; height: 100%;overflow-x: hidden; }

.user-item{
  width: 44px;
  display: inline-block;
  margin-right: 10px;
  position: relative;
  .delete{
    width: 100%;
    height: 44px;
    position: absolute;
    text-align: center;
    line-height: 44px;
    display: none;
    top: 0;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    z-index: 999;
    i{
      color: red;
      font-size: 16px;
    }
    cursor: pointer;
  }
}
.user-item:hover>.delete{
  display: block;
}
.user-item>span{
  display: inline-block;
  font-size: 12px;
  width: 44px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
h1{
  text-align: center;
}
#contact-right-container{
  height: 600px;
  overflow: hidden;
  background-color: rgba(255,255,255,1);
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
.bottom{
  height: 20%;
  // background-color: aqua;
  p{
    text-align: center;
    line-height: 140px;
    button{
      margin-right: 30px;
    }
  }
}
</style>
