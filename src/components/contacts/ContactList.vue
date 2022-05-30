<template>
  <div id="contact-list-container">
    <!-- 自动完成搜索框 -->
    <TopSearch></TopSearch>
    <!-- 列表 我的好友 加入的群聊 管理的群聊 -->
    <div id="list">
      <el-scrollbar>
        <el-collapse v-model="activeNames">
          <el-collapse-item title="我的好友" name="1">
            <ContactItem v-for="(item) in friendsList"
            :key="item.id"
            :id="item.id"
            :avatar="item.Icon"
            :nickname="item.Username"
            :state="item.State"
            :type="item.Type"
            :obj="item"
            ></ContactItem>
          </el-collapse-item>
          <el-collapse-item title="加入的群聊" name="2">
            <ContactItem v-for="(item) in joinGroups"
            :key="item.id"
            :id="item.id"
            :avatar="item.groupAvatar"
            :nickname="item.groupName"
            :type="item.Type"
            :obj="item"
            ></ContactItem>
          </el-collapse-item>
          <el-collapse-item title="管理的群聊" name="3">
            <ContactItem v-for="(item) in controlGroups"
            :key="item.id"
            :id="item.id"
            :avatar="item.groupAvatar"
            :nickname="item.groupName"
            :type="item.Type"
            :obj="item"
            ></ContactItem>
          </el-collapse-item>
        </el-collapse>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
import TopSearch from '@/components/TopSearch.vue'
import ContactItem from '@/components/contacts/ContactItem.vue'
export default {
  components: {
    TopSearch,
    ContactItem
  },
  data () {
    return {
      activeNames: [],
      friendsList: [
        {
          id: '1',
          Icon: require('@/assets/image/avatar.jpg'),
          Username: '大开心',
          State: 'online',
          Slogan: '这个人很懒，什么也没有留下',
          Gender: '女',
          Address: '陕西 西安',
          Job: '学生',
          Phone: '15665620117',
          Type: 'user',
          Birthday: '2002-02-19'
        },
        {
          id: '2',
          Icon: require('@/assets/image/avatar.jpg'),
          Username: '小开心',
          State: 'offline',
          Slogan: '这个人很懒，什么也没有留下',
          Gender: '男',
          Address: '陕西 西安',
          Job: '学生',
          Phone: '15665620118',
          Type: 'user',
          Birthday: '2002-02-19'
        },
        {
          id: '3',
          Icon: require('@/assets/image/avatar.jpg'),
          Username: '嘻嘻嘻嘻嘻',
          State: 'offline',
          Slogan: '这个人很懒，什么也没有留下',
          Gender: '女',
          Address: '陕西 西安',
          Job: '学生',
          Phone: '15665620119',
          Type: 'user',
          Birthday: '2002-02-19'

        },
        {
          id: '4',
          Icon: require('@/assets/image/avatar.jpg'),
          Username: '哈哈哈哈哈',
          State: 'offline',
          Slogan: '这个人很懒，什么也没有留下',
          Gender: '女',
          Address: '陕西 西安',
          Job: '学生',
          Phone: '15665620119',
          Type: 'user',
          Birthday: '2002-02-19'
        }
      ],
      joinGroups: [
        {
          id: '1',
          groupAvatar: require('@/assets/image/avatar2.jpg'),
          groupName: '茶话会',
          groupNumber: '12128973',
          groupSlogan: '唠嗑唠嗑',
          isController: false,
          controller: {
            id: '12',
            Icon: require('@/assets/image/avatar2.jpg'),
            Username: '哈哈哈'
          },
          Type: 'group',
          createTime: '2022-05-08',
          users: [
            {
              id: '4fw',
              Icon: require('@/assets/image/avatar2.jpg'),
              Username: '小开心'
            },
            {
              id: '45frq',
              Icon: require('@/assets/image/avatar2.jpg'),
              Username: '小开心'
            },
            {
              id: '4314rr',
              Icon: require('@/assets/image/avatar2.jpg'),
              Username: '小开心'
            },
            {
              id: '4314r34',
              Icon: require('@/assets/image/avatar2.jpg'),
              Username: '小开心'
            },
            {
              id: '45421r',
              Icon: require('@/assets/image/avatar.jpg'),
              Username: '小开心'
            },
            {
              id: '4fd',
              Icon: require('@/assets/image/avatar.jpg'),
              Username: '小开心'
            },
            {
              id: '4343224',
              Icon: require('@/assets/image/avatar.jpg'),
              Username: '小开心'
            },
            {
              id: '45',
              Icon: require('@/assets/image/avatar.jpg'),
              Username: '小开心'
            },
            {
              id: '4324',
              Icon: require('@/assets/image/avatar.jpg'),
              Username: '小开心hhhhhh'
            },
            {
              id: '4vds',
              Icon: require('@/assets/image/avatar.jpg'),
              Username: '小开心'
            },
            {
              id: '45wqfe',
              Icon: require('@/assets/image/avatar.jpg'),
              Username: '小开心'
            },
            {
              id: '4vd',
              Icon: require('@/assets/image/avatar.jpg'),
              Username: '小开心'
            }
          ]
        }
      ],
      controlGroups: [
        {
          id: '1',
          groupAvatar: require('@/assets/image/avatar.jpg'),
          groupName: 'h哈哈哈哈哈',
          groupNumber: '12128973',
          groupSlogan: '嘻嘻嘻嘻嘻嘻嘻',
          isController: true,
          controller: {
            id: '12',
            Icon: require('@/assets/image/avatar.jpg'),
            Username: '哈哈哈'
          },
          Type: 'group',
          createTime: '2022-05-08',
          users: [
            {
              id: '4fw',
              Icon: require('@/assets/image/avatar2.jpg'),
              Username: '小开心'
            },
            {
              id: '45frq',
              Icon: require('@/assets/image/avatar2.jpg'),
              Username: '小开心'
            },
            {
              id: '4314rr',
              Icon: require('@/assets/image/avatar2.jpg'),
              Username: '小开心'
            },
            {
              id: '4314r34',
              Icon: require('@/assets/image/avatar.jpg'),
              Username: '小开心'
            },
            {
              id: '45421r',
              Icon: require('@/assets/image/avatar.jpg'),
              Username: '小开心'
            },
            {
              id: '4fd',
              Icon: require('@/assets/image/avatar.jpg'),
              Username: '小开心'
            },
            {
              id: '4343224',
              Icon: require('@/assets/image/avatar.jpg'),
              Username: '小开心'
            },
            {
              id: '45',
              Icon: require('@/assets/image/avatar.jpg'),
              Username: '小开心'
            },
            {
              id: '4324',
              Icon: require('@/assets/image/avatar.jpg'),
              Username: '小开心hhhhhh'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped lang="less">
#contact-list-container{
  height: 600px;
  background-color: #fff;
  overflow: hidden;
  border-right: solid 1px #e6e6e6;
}
#list{
  height: 540px;
  padding: 0 10px;
  margin-bottom: 100px;
}

/deep/ .el-scrollbar{
  height: 100%;
}
/deep/ .el-scrollbar__wrap {
  overflow: scroll;
  width: 110%;
  height: 100%;
  overflow-x: hidden;
}
</style>
