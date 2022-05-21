<template>
    <div id="swiperTop">
        <van-swipe :autoplay="3000" lazy-render>
            <van-swipe-item v-for="image in images" :key="image">
                <img :src="image.pic"/>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
import { getBanners } from '@/request/api/home.js'
import {onMounted, reactive, toRefs} from 'vue'
export default {
    setup () {
        const state = reactive({
            images:[
                'https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                'https://cdn.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
            ]
        });
    onMounted( async() => {
        let res = await getBanners()
        state.images = res.data.banners
    })
    return {...toRefs(state)}
}
}
</script>

<style lang="less" scoped>
#swiperTop{
/deep/.van-swipe{
    width: 100%;
    height: 150px;
    .van-swipe__track{
        .van-swipe-item{
            padding: 0px 10px;
            img{
                width: 100%;
                height: 100%;
                border-radius: 10px;
            }
        }
    }
    .van-swipe__indicator--active{
        background-color: rgb(219,130,130);
    }
}
}

</style>