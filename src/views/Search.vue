<template>
    <div class="searchTop">
        <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
                <use xlink:href="#icon-zuojiantou"></use>
        </svg>
        <input type="text" placeholder="陈奕迅" @keydown.enter="enterKey" v-model="searchKey">
    </div>
    <div class="searchHistory">
        <span class="searchSpan">历史</span>
        <span v-for="item in keyWordList" :key="item" class="spanKey" @click="searchHistory(item)">{{item}}</span>
        <svg class="icon" aria-hidden="true" @click="delHistory">
                <use xlink:href="#icon-shanchu"></use>
        </svg>
    </div>
    <!-- 搜索列表 -->
    <div class="itemList">
            <div class="item" v-for="(item,i) in searchList" :key="i">
                <div class="itemLeft" @click="updateIndex(item)">
                    <span class="leftSpan">{{i+1}}</span>
                    <div>
                        <p>{{item.name}}</p>
                        <span v-for="(item1,index) in item.artists" :key="index">{{item1.name}}</span>
                    </div>
                </div>
                <div class="itemRight">
                    <svg class="icon" aria-hidden="true" v-if="item.mvid != 0">
                        <use xlink:href="#icon-shipin"></use>
                    </svg>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-31liebiao"></use>
                    </svg>
                </div>   
            </div>
    </div>
</template>

<script>
import { getSearchMusic } from '@/request/api/home.js'
    export default {
        data() {
            return {
                keyWordList:[],
                searchKey:'',
                searchList:[]
            }
        },
        mounted () {
            this.keyWordList =JSON.parse(localStorage.getItem('keyWordList')) ? JSON.parse(localStorage.getItem('keyWordList')) : []
        },
        methods: {
           async enterKey () {
                if(this.searchKey != ''){
                    this.keyWordList.unshift(this.searchKey);
                     //去重
                     this.keyWordList = [...new Set(this.keyWordList)]
                     //固定长度
                     if(this.keyWordList.length > 4){
                         this.keyWordList.splice(this.keyWordList.length - 1,1)
                     }
                     localStorage.setItem('keyWordList',JSON.stringify(this.keyWordList));
                     let res = await getSearchMusic(this.searchKey)
                     this.searchList = res.data.result.songs
                     this.searchKey = ''
                }   
            },
            delHistory(){
                localStorage.removeItem('keyWordList')
                this.keyWordList = []
            },
            async searchHistory(item){
                let res = await getSearchMusic(item)
                console.log(res);
                this.searchList = res.data.result.songs
            },
            updateIndex(item){
                item.al = item.album
                item.al.picUrl = item.album.artist.img1v1Url
                this.$store.commit('pushPlayList',item)
                this.$store.commit('updatePlayListIndex',this.$store.state.playList.length - 1)
            }
        },
    }
</script>

<style lang="less" scoped>
.searchTop{
    width: 100%;
    height: 50px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    input{
        width: 95%;
        padding: 5px  ;
        margin-left: 10px;
        border: none;
        border-bottom: 1px solid #a3a3a3;
    }
}
.searchHistory{
    width: 100%;
    height: 60px;
    padding: 10px;
    position: relative;
    display: flex;
    align-items: center;
    .searchSpan{
        font-weight: 700;
    }
    .spanKey{
        padding: 5px 10px;
        border-radius: 20px;
        background-color: #999;
        margin: 5px 10px;
        display: inline-block;
    }
    .icon{
        width: 15px;
        height: 15px;
        position: absolute;
        right: 10px;
    }
}
.itemList{
        width: 100%;
        padding: 10px;
        .item{
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 60px;
            .itemLeft{
                display: flex;
                align-items: center;
                .leftSpan{
                    width: 10px;
                }
                div{
                    margin-left: 20px;
                    p{
                        font-size: 14px;
                        font-weight: bold;
                    }
                    span{
                        font-size: 8px;
                        color: #6b6b6b;
                    }
                }

            }
            .itemRight{
                .icon{

                    padding: 0 0 0 5px;
                }
            }
        }
}
</style>