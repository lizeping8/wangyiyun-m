<template>
    <div class="itemMusicList">
        <div class="itemListTop">
            <div class="itemListLeft">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-bofanganniu"></use>
                </svg>
                <span>播放全部</span>
                <span class="textList">(共{{itemList.length}}首)</span>
            </div>

            <div class="itemListRight">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-jiahao"></use>
                </svg>
                <span>收藏({{subscribedCount}})</span>
            </div>
        </div>

        <div class="itemList">
            <div class="item" v-for="(item,i) in itemList" :key="i">
                <div class="itemLeft" @click="playMusic(i)">
                    <span class="leftSpan">{{i+1}}</span>
                    <div>
                        <p>{{item.name}}</p>
                        <span v-for="(item1,index) in item.ar" :key="index">{{item1.name}}</span>
                    </div>
                </div>
                <div class="itemRight">
                    <svg class="icon" aria-hidden="true" v-if="item.mv != 0">
                        <use xlink:href="#icon-shipin"></use>
                    </svg>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-31liebiao"></use>
                    </svg>
                </div>   
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    setup (props) {
        console.log(props);

        return {}
    },
    props:["itemList","subscribedCount"],
    methods: {
        playMusic(i){
            this.updatePlayList(this.itemList)
            this.updatePlayListIndex(i)
        },
        ...mapMutations(['updatePlayList','updatePlayListIndex'])
    },
}
</script>

<style lang="less" scoped>
.itemMusicList{
    padding: 10px;
    margin-top: 20px;
    background-color: #fff;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    box-shadow: 1px 1px 5px rgb(170, 170, 170);
    .itemListTop{
        display: flex;
        justify-content: space-between;
        height: 40px;
        .itemListLeft{
            display: flex;
            align-items: center;
            .icon{
                width: 18px;
                height: 18px;
            }
            span{
                font-size: 14px;
                margin-left: 8px;
            }
            .textList{
                font-size: 10px;
                color: #6b6b6b;
            }
        }
        .itemListRight{
            display: flex;
            width: 120px;
            align-items: center;
            justify-content: center;
            background-color: rgb(238, 22, 22);
            border-radius: 50px;
            .icon{
                width: 18px;
                height: 18px;
                fill: #fff;
                margin-right: 5px;
            }
            span{
                font-size: 14px;
                color: white;
            }
        }

    }
    .itemList{
        margin-top: 10px;
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
}
</style>