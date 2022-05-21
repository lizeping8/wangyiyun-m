<template>
    <div>
        <ItemMusicTop :playlist="playlist"></ItemMusicTop>
        <ItemMusicList :itemList="itemList" :subscribedCount="playlist.subscribedCount"></ItemMusicList>
    </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { onMounted, reactive, toRefs } from 'vue'
import { getMusicItemList,getItemList } from '@/request/api/item.js'
import ItemMusicTop from '@/components/item/ItemMusicTop'
import ItemMusicList from '@/components/item/ItemMusicList'
export default {
    setup () {
        let route = useRoute()

        const state = reactive({
            playlist:{},//歌单详情页的数据
            itemList:[] //歌单的歌曲
        })
        
        //获取歌单数据初始化
        const ListInit = async()=>{
            let id = route.query.id
            //获取歌单详情
            let res = await getMusicItemList(id)
            state.playlist = res.data.playlist
            //获取歌单歌曲列表
            let result = await getItemList(id)
            state.itemList = result.data.songs
            //防止页面刷新 数据丢失 将数据保存到sessionStorage
            sessionStorage.setItem('itemDetail',JSON.stringify(state))
        }
    onMounted(()=>{
        ListInit()
    })
        return {ListInit,...toRefs(state)}
    },

    components: {
        ItemMusicTop,
        ItemMusicList
    },
}
</script>

<style lang="scss" scoped>

</style>