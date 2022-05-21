<template>
    <div class="musicList">
        <div class="musicTop">
            <div class="title">发现好歌单</div>
            <div class="more">查看更多</div>
        </div>
        <div class="musicContent">
            <van-swipe :loop="false" :width="150" :show-indicators="false" class="my-swpie">
                <van-swipe-item v-for="item in musicList" :key="item">
                <router-link :to="{path:'/itemMusic',query:{id:item.id}}">
                    <img :src="item.picUrl" alt="">
                    <span class="palyCount"> 
                        <svg t="1652628808657" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3082" width="200" height="200"><path d="M224 938.713333a53.58 53.58 0 0 1-53.333333-53.433333V138.72a53.333333 53.333333 0 0 1 80.886666-45.666667l618.666667 373.28a53.333333 53.333333 0 0 1 0 91.333334l-618.666667 373.28a53.16 53.16 0 0 1-27.553333 7.766666z m0.046667-810.666666a10.98 10.98 0 0 0-5.333334 1.42 10.466667 10.466667 0 0 0-5.38 9.253333v746.56a10.666667 10.666667 0 0 0 16.18 9.133333l618.666667-373.28a10.666667 10.666667 0 0 0 0-18.266666l-618.666667-373.28a10.386667 10.386667 0 0 0-5.446666-1.586667z" fill="#ffffff" p-id="3083"></path></svg>
                        {{typeCount(item.playCount)}}
                    </span>
                    <span class="name">{{item.name}}</span>
                </router-link>
                </van-swipe-item>
            </van-swipe>
        </div>
    </div>
</template>

<script>
import { onMounted, reactive, toRefs} from 'vue'
import { getMusicList } from '@/request/api/home.js'
export default {
    setup () {
        let data = reactive({
            musicList:[]
        })
    onMounted(async()=>{
        let res = await getMusicList()
        data.musicList = res.data.result
        console.log(data.musicList);
        typeCount()
    })

    const typeCount = (num) => {
        if(num>=100000000){
            return (num/100000000).toFixed(1) + "亿"
        }else if(num >= 10000){
            return (num/10000).toFixed(1) + "万"
        }  
    }
        return {...toRefs(data),typeCount}
    }
}
</script>

<style lang="less" scoped>
.musicList{
    width: 100%;
    height: 5rem;
    padding: 0.2rem;
    .musicTop{
        width: 100%;
        height: 0.6rem;
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.2rem;
        .title{
            font-size: 0.4rem;
            font-weight: 900;
        }
        .more{
            border: 1px solid #ccc;
            text-align: center;
            line-height: 0.6rem;
            padding: 0 0.2rem;
            border-radius: 0.4rem;
        }
    }
    .musicContent{
        width: 100%;
        height: 200px;
        .my-swpie{
            height: 100%;
            .van-swipe-item{
                padding: 5px;
                position: relative;  
            }
            .palyCount{
                display: flex;
                align-items: center;
                position:absolute;
                top:8px;
                right: 8px;
                font-size: 5px;
                color: white;
                .icon{
                    margin-right: 3px;
                    width: 15px;
                    height: 15px;
                }
            }
            .name{
                font-size: 5px;
            }
            img{
                width: 100%;
                height: 140px;
                border-radius: 10px;
                box-shadow: 1px 1px 5px #c9c9c9;
            }
        }
    }
}
</style>