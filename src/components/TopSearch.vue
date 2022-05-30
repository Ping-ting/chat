<template>
  <div id="top-search-container">
    <div class="global-search-wrapper" style="width: 100%">
      <a-auto-complete
        class="global-search"
        size="large"
        style="width: 100%"
        placeholder="试试在这里搜索吧"
        option-label-prop="title"
        :dropdown-match-select-width="false"
        @change="change"
        @select="onSelect"
        @search="search"
      >

        <template slot="dataSource">

          <!-- 查询到的用户列表 -->
          <a-select-opt-group v-if="users.length !== 0">
            <span slot="label">相关用户：</span>
            <a-select-option v-for="(user,index) in users" :key="user.id" :value="user.id" @click="itemClick('user',index)">
              <el-avatar class="friend-avatar" :src="user.Icon" :size="30" ></el-avatar>
                <span class="certain-search-item-count">{{user.searchValue.front}}</span>
                <a>{{inputValue}}</a>
                <span class="certain-search-item-count">{{ user.searchValue.rear }}</span>
            </a-select-option>
          </a-select-opt-group>
          <!-- 查询到的群组列表 -->
          <a-select-opt-group v-if="groups.length !== 0">
            <span slot="label">相关群组：</span>
            <a-select-option v-for="(group,index) in groups" :key="group.id" :value="group.id" @click="itemClick('group',index)">
              <el-avatar class="friend-avatar" :src="group.groupAvatar" :size="30" ></el-avatar>
                <span class="certain-search-item-count">{{group.groupName}}</span>
                <a>{{inputValue}}</a>
                <span class="certain-search-item-count">（{{ group.groupNumber }}）</span>
            </a-select-option>
          </a-select-opt-group>
        </template>

        <a-input>
          <a-button
            slot="suffix"
            style="margin-right: -12px"
            class="search-btn"
            size="large"
            type="primary"
          >
            <a-icon type="search" class="certain-category-icon"/>
          </a-button>
        </a-input>
      </a-auto-complete>
  </div>
</div>

</template>
<script>
import _ from 'lodash'
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      inputValue: '13233',
      users: [
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
          searchValue: {
            mid: '大开',
            front: '心',
            rear: '（15665620117）'
          }
        },
        {
          id: '2',
          Icon: require('@/assets/image/avatar.jpg'),
          Username: '大开心',
          State: 'online',
          Slogan: '这个人很懒，什么也没有留下',
          Gender: '女',
          Address: '陕西 西安',
          Job: '学生',
          Phone: '15665620117',
          Type: 'user',
          searchValue: {
            mid: '大开',
            front: '心',
            rear: '（15665620117）'
          }
        },
        {
          id: '3',
          Icon: require('@/assets/image/avatar.jpg'),
          Username: '大开心',
          State: 'online',
          Slogan: '这个人很懒，什么也没有留下',
          Gender: '女',
          Address: '陕西 西安',
          Job: '学生',
          Phone: '15665620117',
          Type: 'user',
          searchValue: {
            mid: '大开',
            front: '心',
            rear: '（15665620117）'
          }
        }
      ],
      groups: [
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
        },
        {
          id: '2',
          groupAvatar: require('@/assets/image/avatar2.jpg'),
          groupName: '哈哈哈哈哈·',
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
      ]
    }
  },
  methods: {
    ...mapMutations('contactRightAbout', ['UP_DATE_TYPE', 'UP_DATE_isFriend', 'UP_DATE_isGroup', 'UP_DATE_USER', 'UP_DATE_GROUP']),
    // input 内容改变 + 点击下拉item 时调用
    change (value) {
      // console.log('change', value)
    },
    // 点击下拉item时调用
    onSelect (value, option) {
      // console.log('onSelect', value, option)
    },
    // input 内容改变时调用
    // 使用防抖函数 实时发送请求获取数据
    search: _.debounce(function () {
      console.log('发送请求！')
    }, 1000),
    itemClick (type, index) {
      console.log(type, index)
      // 1. 更新类型 type
      this.UP_DATE_TYPE(type)
      // 2. 更新 myFriend 或者 myGroup
      // 3. 更新 user 或者 group
      if (type === 'user') {
        this.UP_DATE_isFriend(false)
        this.UP_DATE_USER(this.users[index])
      } else if (type === 'group') {
        this.UP_DATE_isGroup(false)
        this.UP_DATE_GROUP(this.groups[index])
      }
    }
  }
}
</script>

<style lang="less" scoped>
.friend-avatar{
  position: relative;
  left: -5px;
  bottom: -5px;
}
#top-search-container{
  padding: 10px;
}

.global-search {
  width: 100%;
}

.global-search.ant-select-auto-complete .ant-select-selection--single {
  margin-right: -46px;
}

.global-search.ant-select-auto-complete .ant-input-affix-wrapper .ant-input:not(:last-child) {
  padding-right: 62px;
}

.global-search.ant-select-auto-complete .ant-input-affix-wrapper .ant-input-suffix button {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.global-search-item {
  display: flex;
}

.global-search-item-desc {
  flex: auto;
  text-overflow: ellipsis;
  overflow: hidden;
}

.global-search-item-count {
  flex: none;
}

</style>
