<template>
  <div id="chat-content-container">
    <div id="header-container">
      <p>{{friendNickname}}</p>
    </div>
    <JwChat
    :width="'100%'"
    :taleList="list"
    v-model="inputMsg"
    :toolConfig="tool"
    :config="config"
    >
      <template slot="tools">
        哈哈哈
        <div style="width:20rem;text-align:right;" @click="toolEvent('自定义')">
          <b slot="tools">哈哈哈</b>
        </div>
      </template>
    </JwChat>
  </div>
</template>

<script>
export default {
  data () {
    return {
      friendNickname: 'pingting',
      inputMsg: '',
      list: [],
      tool: {
        show: ['file', 'img']
      },
      config: {
        historyConfig: {
          show: true,
          tip: '加载历史记录中...',
          callback: function () {
            console.log('加载...')
          }
        }
      },
      quickList: [
        { text: '这里是jwchat，您想了解什么问题。' },
        { text: 'jwchat是最好的聊天组件' },
        { text: '谁将烟焚散，散了纵横的牵绊；听弦断，断那三千痴缠。' },
        { text: '长夏逝去。山野间的初秋悄然涉足。' },
        { text: '江南风骨，天水成碧，天教心愿与身违。' },
        { text: '总在不经意的年生。回首彼岸。纵然发现光景绵长。' },
        { text: '外面的烟花奋力的燃着，屋里的人激情的说着情话' },
        { text: '假如你是云，我就是雨，一生相伴，风风雨雨；' },
        { text: '即使泪水在眼中打转，我依旧可以笑的很美，这是你学不来的坚强。' },
        { text: ' 因为不知来生来世会不会遇到你，所以今生今世我会加倍爱你。' }
      ]
    }
  },
  mounted () {
    const img = 'https://www.baidu.com/img/flexible/logo/pc/result.png'
    const list = [
      {
        date: '2020/04/25 21:19:07',
        text: { text: '起床不' },
        mine: false,
        name: '留恋人间不羡仙',
        img: require('@/assets/image/avatar.jpg')
      },
      {
        date: '2020/04/25 21:19:07',
        text: { text: "<audio data-src='https://www.w3school.com.cn/i/horse.mp3'/>" },
        mine: false,
        name: '只盼流星不盼雨',
        img: require('@/assets/image/avatar.jpg')
      },
      {
        date: '2020/04/25 21:19:07',
        text: { text: "<img data-src='" + img + "'/>" },
        mine: false,
        name: '只盼流星不盼雨',
        img: require('@/assets/image/avatar.jpg')
      },
      {
        date: '2020/04/25 21:19:07',
        text: { text: '<img data-src=' + require('@/assets/image/avatar.jpg') + '/>' },
        mine: false,
        name: '只盼流星不盼雨',
        img: require('@/assets/image/avatar.jpg')
      },
      {
        date: '2020/04/16 21:19:07',
        text: { text: "<video data-src='https://www.w3school.com.cn/i/movie.mp4' controls='controls' />" },
        mine: true,
        name: 'JwChat',
        img: require('@/assets/image/avatar.jpg')
      },
      {
        date: '2020/04/25 21:19:07',
        text: {
          text: "<i class='el-icon-document-checked' style='font-size:2rem;'/>",
          subLink: {
            text: 'a.txt',
            prop: {
              underline: false
            }
          }
        },
        mine: false,
        name: '留恋人间不羡仙',
        img: require('@/assets/image/avatar.jpg')
      }
    ]
    this.list = list
  }
}
</script>

<style>
#chat-content-container{
  height: 600px;
  /* border-left: 2px solid rgba(255, 255, 255,0.4); */
  /* background-color: #fff; */
}
#header-container{
  padding: 2px;
  /* background-color: #fff; */
  border-bottom: 1px solid rgba(255, 255, 255,0.4);
}
#header-container p{
  text-align: center;
  font-size: 18px;
  color: #fff;
}
.chatPage[data-v-035fd875]{
  background-color: none !important;
}
.chatPage {
  height: 540px !important;
  background-color: none !important;
}
.wrapper{
  height: 400px !important;
}
</style>
