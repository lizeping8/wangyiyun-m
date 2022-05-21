<template>
<div class="First">
    <img :src="musicList.al.picUrl" alt="" class="bgimg">
    <div class="detailTop">
        <div class="detailLeft">
            <svg class="icon" aria-hidden="true" @click="updateDetailShow">
                <use xlink:href="#icon-zuojiantou" ></use>
            </svg>
            <div class="content">
                <Vue3Marquee>{{musicList.name}}</Vue3Marquee>
                <span v-for="(item,i) in musicList.ar" :key="i">{{item.name}}</span>
            </div>
        </div>
        <div class="detailRight">
            <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-fenxiang" ></use>
            </svg>
        </div>
    </div>

    <!-- 详情中间部分 -->
    <div class="detailContent" v-show="isShow" >
        <img src="@/assets/needle.png" alt="" class="img_needle" :class="{img_needle_active:!isbtnShow}">
        <img src="@/assets/cd.png" alt="" class="img_cd" >
        <img :src="musicList.al.picUrl" @click="MusicShow" class="img_ar" :class="{img_ar_active:!isbtnShow,img_ar_paused:isbtnShow}" >
    </div>
    <!-- 歌词 -->
    <div class="musicLysic" ref="musicLysic" @click="MusicShow" v-show="!isShow">
        <p v-for="item in lyric" :key="item" :class="{active:(currentTime*1000 >=item.time && currentTime*1000 <item.pre)}">
        {{item.lrc}}
        </p>
    </div>

    <!-- 底部 -->
    <div class="detailFooter">
        <div class="footerTop">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-aixin" ></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-iconfontzhizuobiaozhun023146" ></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-yinlechangpian" ></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-iconfontzhizuobiaozhun023110" ></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-liebiao-" ></use>
            </svg>
        </div>
        <div class="footerContent">
            <input type="range" class="range" min="0" :max="duration" v-model="currentTime" step="0.05">
        </div>
        <div class="footer">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-xunhuan" ></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-shangyishoushangyige" @click="goplay(-1)"></use>
            </svg>
            <svg class="icon1" aria-hidden="true" @click="play" v-if="isbtnShow">
                <use xlink:href="#icon-bofang1" ></use>
            </svg>
            <svg class="icon1" aria-hidden="true" @click="play" v-else>
                <use xlink:href="#icon-zanting" ></use>
            </svg>
            <svg class="icon" aria-hidden="true" @click="goplay(1)">
                <use xlink:href="#icon-xiayigexiayishou" ></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-zu" ></use>
            </svg>
        </div>
    </div>
</div>
</template>

<script>
import { Vue3Marquee } from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'
import { mapMutations, mapState } from 'vuex'
export default {
    props:['musicList','isbtnShow','play','AddDuration'],
    data() {
        return {
            isShow:true
        }
    },
    methods:{
        ...mapMutations(['updateDetailShow','updatePlayListIndex']),
        MusicShow(){
            this.isShow = !this.isShow
        },
        goplay(i){
            let index = i + this.playListIndex
            if(index < 0 ){
                index = this.playList.length - 1
            }else if(index === this.playList.length){
                index = 0
            }
            this.updatePlayListIndex(index)
        }
    },
    mounted(){
        this.AddDuration()
    },
    components:{
        Vue3Marquee
    },
    watch:{
        currentTime(newValue){
            let p = document.querySelector('p.active')
            console.log([p]);
            if(p){
                if(p.offsetTop > 300){
                this.$refs.musicLysic.scrollTop = p.offsetTop - 300
            }
            }
            if(newValue === this.duration){
                
                if(this.playListIndex === this.playListIndex + 1){
                    this.updatePlayListIndex(0)
                    this.play()
                }else{
                    this.updatePlayListIndex(this.playListIndex + 1)
                }
            }
            
        }
    },
    computed:{
        ...mapState(['lyricList','currentTime','playList','playListIndex','duration']),
        lyric(){
            let arr = [];
            if(this.lyricList.lyric){
                arr = this.lyricList.lyric.split(/[(\r\n)\r\n]+/).map((item,i)=>{
                    let min = item.slice(1,3)
                    let sec = item.slice(4,6)
                    let mill = item.slice(7,10)
                    let lrc = item.slice(11,item.length)
                    let time =parseInt(min)*60*1000+parseInt(sec)*1000+parseInt(mill)
                    if(isNaN(Number(mill))){
                         mill = item.slice(7,9)
                         lrc = item.slice(10,item.length)
                         time =parseInt(min)*60*1000+parseInt(sec)*1000+parseInt(mill)
                    }
                    return {min,sec,mill,lrc,time};
                })
                arr.forEach((item,i) => {
                   if(i === arr.length - 1 || isNaN(arr[i+1].time)){
                       item.pre = 100000
                   }else{
                       item.pre = arr[i+1].time
                   } 
                });
            }
            return arr
        }
    }
}
</script>

<style lang="less" scoped>
.bgimg{
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    filter: blur(60px);
}
.detailTop{
    display: flex;
    padding: 20px 10px 10px 10px;
    justify-content: space-between;
    align-items: center;
    .detailLeft{
        display: flex;
        align-items: center;
        .icon{
            width: 20px;
            height: 20px;
            fill: white;
            margin-right: 10px;
        }
        .content{
            font-size: 14px;
            color: white;
            width: 100px;
            span{
                font-size: 8px;
                color: #c5c5c5;
            }
        }
    }
    .detailRight{
        .icon{
            fill:white;
            width: 20px;
            height: 20px;
        }
    }
}

.detailContent{
    width: 100%;
    height: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    .img_needle{
        width: 100px;
        height: 150px;
        position: absolute;
        left: 46%;
        transform-origin: 0 0;
        transform: rotate(-13deg);
        transition: all 2s;
    }
    .img_needle_active{
        width: 100px;
        height: 150px;
        position: absolute;
        left: 46%;
        transform-origin: 0 0;
        transform: rotate(0deg);
        transition: all 2s;
    }
    .img_cd{
        width: 250px;
        height: 250px;
        position: absolute;
        bottom: 115px;
        z-index: -1;
    }
    .img_ar{
        width: 160px;
        height: 160px;
        border-radius: 50%;
        position: absolute;
        bottom: 157px;
        animation: rotate_ar 10s linear infinite;
    }
    .img_ar_active{
        animation-play-state: running;
    }
    .img_ar_paused{
        animation-play-state: paused;
    }
    @keyframes rotate_ar {
        0%{
            transform: rotateZ(0deg);
        }
        100%{
            transform: rotateZ(360deg);
        }
    }
}

.detailFooter{
    width: 100%;
    height: 140px;
    display: flex;
    position: fixed;
    bottom: 10px;
    flex-direction: column;
    justify-content: space-between;
    .footerTop{
       display: flex; 
       justify-content: space-around;
        align-items: center;
       .icon{
           fill: white;
           width: 25px;
           height: 25px;
       }
    }
    .range{
        width: 100%;
        height: 15px;
    }
    .footer{
        display: flex; 
       justify-content: space-around;
       align-items: center;
        .icon{
           fill: white;
           width: 25px;
           height: 25px;
       }
       .icon1{
           width: 55px;
           height: 55px;
           fill: white;
       }
    }
}

.musicLysic{
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    overflow: scroll;
    p{
        color: #241a1a;
        margin-bottom: 20px;
    }
    .active{
        color: white;
        font-size: 20px;
    }
}
</style>