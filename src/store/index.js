import { createStore } from 'vuex'
import { getItemLyric } from '@/request/api/item.js'
import { getPhoneLogin } from '@/request/api/home.js'
export default createStore({
  state: {
    playList:[{//播放列表
      al:{
        id: 23509,
        name: "G.E.M.",
        pic: 109951163069324880,
        picUrl: "https://p2.music.126.net/SRSzJNkVegFlCJVc49VvxQ==/109951163069324876.jpg",
        pic_str: "109951163069324876"
      },
      id:234064,
    }],
      playListIndex:0,//默认下标为0
      isbtnShow:true,//暂停按钮显示
      datailShow:false,//歌曲详情页的显示
      lyricList:{},//歌词
      currentTime:0,//当前时间
      duration:0,//歌曲时长
      isLogins:false,//判断是否登录
      isFooterMusic:true,//判断底部组件是否需要显示
      token:'',
      user:{},//用户信息
  },
  mutations: {
    updateIsbtnShow:(state,value)=>{
      state.isbtnShow = value
    },
    pushPlayList:(state,value)=>{
      state.playList.push(value)
    },
    updatePlayList:(state,value)=>{
      state.playList = value
    },
    updatePlayListIndex:(state,value)=>{
      state.playListIndex = value
    },
    updateDetailShow:(state)=>{
      state.datailShow = !state.datailShow
    },
    updateLyricList:(state,value)=>{
      state.lyricList = value
    },
    updateCurrentTime:(state,value)=>{
      console.log(state.currentTime);
      state.currentTime = value
    },
    updateDuration:(state,value)=>{
      state.duration = value
    },
    updateIsLogin:(state,value)=>{
      state.isLogins = value
    },
    updateToken:(state,value)=>{
      state.token = value
      localStorage.setItem('token',state.token)
    },
    updateUser:(state,value)=>{
      state.user = value
      localStorage.setItem('user',state.user)
    },
  },
  actions: {
   async getLyric(context,value){
      let res = await getItemLyric(value)
      context.commit('updateLyricList',res.data.lrc)
    },
    async  getLogin(context,value){
      let res = await getPhoneLogin(value)
      console.log(res);
      return res
    }
  },
  modules: {
  }
})
