<template>
<div class="Top">
    <div class="itemMusicTop">
        <!-- 头部和背景 -->
        <img :src="playlist.coverImgUrl" alt="" class="bgimg">
        <div class="itemLeft">
            <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
                <use xlink:href="#icon-zuojiantou"></use>
            </svg>
            <span>歌单</span>
        </div>
        <div class="itemRight">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-sousuo"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-31liebiao"></use>
            </svg>
        </div>
    </div>


<!-- 头部介绍 -->
<div class="itemInfo">
    <div class="topImg">
        <img :src="playlist.coverImgUrl" alt="">
        <span class="palyCount"> 
            <svg t="1652628808657" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3082" width="200" height="200"><path d="M224 938.713333a53.58 53.58 0 0 1-53.333333-53.433333V138.72a53.333333 53.333333 0 0 1 80.886666-45.666667l618.666667 373.28a53.333333 53.333333 0 0 1 0 91.333334l-618.666667 373.28a53.16 53.16 0 0 1-27.553333 7.766666z m0.046667-810.666666a10.98 10.98 0 0 0-5.333334 1.42 10.466667 10.466667 0 0 0-5.38 9.253333v746.56a10.666667 10.666667 0 0 0 16.18 9.133333l618.666667-373.28a10.666667 10.666667 0 0 0 0-18.266666l-618.666667-373.28a10.386667 10.386667 0 0 0-5.446666-1.586667z" fill="#ffffff" p-id="3083"></path></svg>
            {{typeCount(playlist.playCount)}}
        </span>
    </div>
    <div class="topContent">
        <span class="text">{{playlist.description}}</span>
        <div class="auther">
            <img :src="playlist.creator.avatarUrl" alt="">
            <span class="autherName">{{playlist.creator.nickname}}</span>
        </div>
        <span class="name">{{playlist.name}}</span>
    </div>
</div>

<!-- 列表 -->
<div class="iconList">
    <div class="itemIcon">
        <svg t="1652715847158" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1942" width="200" height="200"><path d="M872.802928 755.99406 872.864326 755.99406 872.864326 755.624646Z" p-id="1943"></path><path d="M641.612475 478.465233 378.562407 478.465233c-18.447141 0-33.352619 13.225209-33.352619 29.515221 0 16.305361 14.905478 29.544897 33.352619 29.544897l263.050068 0c18.417465 0 33.383318-13.239536 33.383318-29.544897C674.995793 491.690442 660.088268 478.465233 641.612475 478.465233" p-id="1944"></path><path d="M512.006651 94.661963c-228.163513 0-413.794327 158.926616-413.794327 354.272699 0 99.213629 49.568952 192.906521 136.968511 260.892939l101.667517 78.787414c-3.004427 16.778128-15.917528 56.111972-30.527271 92.115977-4.582365 11.159154-1.845021 23.979134 6.78452 32.340569 5.623068 5.445012 13.06148 8.30106 20.588921 8.30106 4.046153 0 8.123005-0.831948 12.019755-2.527566 33.6811-14.997576 115.680673-55.042617 173.285648-115.920126 224.933959-3.243881 406.785703-160.637584 406.785703-353.989243C925.785629 253.588579 740.185514 94.661963 512.006651 94.661963M510.431783 744.875838c-1.847068 0-1.847068 0.029676-3.571339 0.326435-12.734022 1.457188-28.682249 18.655895-28.682249 18.655895s-52.634778 52.692083-96.758718 77.745688c16.096607-53.705156 13.269211-73.488735 8.123005-81.138972-1.279133-1.992377-2.707668-3.508917-4.432962-4.670369l0.118704-0.058328c0 0-0.416486-0.208754-1.130753-0.595564-0.38681-0.237407-0.773619-0.416486-1.190105-0.655939-13.449313-7.198959-83.338057-46.055942-140.16839-100.506065-55.101969-57.871035-85.421508-135.467321-85.421508-205.04498 0-162.780387 159.121044-295.226908 354.689185-295.226908 195.567117 0 354.688161 132.447545 354.688161 295.226908C866.694813 611.728352 705.998901 744.875838 510.431783 744.875838" p-id="1945"></path><path d="M645.450896 360.374674l-266.88849 0c-18.447141 0-33.383318 13.224186-33.383318 29.515221 0 16.304338 14.936177 29.529547 33.383318 29.529547l266.88849 0c18.47784 0 33.352619-13.225209 33.352619-29.529547C678.803515 373.59886 663.928736 360.374674 645.450896 360.374674" p-id="1946"></path></svg>
        <span>40</span>
    </div>
    <div class="itemIcon">
        <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-fenxiang"></use>
        </svg>
        <span>20</span>
    </div>
    <div class="itemIcon">
        <svg t="1652715901191" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2811" width="200" height="200"><path d="M512 989.866667C249.173333 989.866667 34.133333 774.826667 34.133333 512S249.173333 34.133333 512 34.133333s477.866667 215.04 477.866667 477.866667-215.04 477.866667-477.866667 477.866667z m0-904.533334C276.48 85.333333 85.333333 276.48 85.333333 512s191.146667 426.666667 426.666667 426.666667 426.666667-191.146667 426.666667-426.666667S747.52 85.333333 512 85.333333z" p-id="2812"></path><path d="M512 738.986667c-6.826667 0-13.653333-1.706667-18.773333-6.826667L343.04 580.266667c-10.24-10.24-10.24-25.6 0-35.84s25.6-10.24 35.84 0l133.12 133.12 133.12-133.12c10.24-10.24 25.6-10.24 35.84 0s10.24 25.6 0 35.84l-150.186667 150.186666c-5.12 5.12-11.946667 8.533333-18.773333 8.533334z"  p-id="2813"></path><path d="M512 738.986667c-13.653333 0-25.6-11.946667-25.6-25.6V278.186667c0-13.653333 11.946667-25.6 25.6-25.6s25.6 11.946667 25.6 25.6v435.2c0 13.653333-11.946667 25.6-25.6 25.6z" p-id="2814"></path></svg>
        <span>下载</span>
    </div>
    <div class="itemIcon">
        <svg t="1652715944965" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4496" width="200" height="200"><path d="M482.133333 646.4c-8.533333 8.533333-21.333333 8.533333-29.866666 0l-168.533334-168.533333c-8.533333-8.533333-21.333333-8.533333-29.866666 0-8.533333 8.533333-8.533333 21.333333 0 29.866666l183.466666 183.466667c17.066667 17.066667 42.666667 17.066667 59.733334 0l315.733333-315.733333c8.533333-8.533333 8.533333-21.333333 0-29.866667-8.533333-8.533333-21.333333-8.533333-29.866667 0L482.133333 646.4z"  p-id="4497"></path><path d="M512 0C228.266667 0 0 228.266667 0 512s228.266667 512 512 512 512-228.266667 512-512S795.733333 0 512 0z m0 981.333333C251.733333 981.333333 42.666667 772.266667 42.666667 512S251.733333 42.666667 512 42.666667s469.333333 211.2 469.333333 469.333333-209.066667 469.333333-469.333333 469.333333z"  p-id="4498"></path></svg>
        <span>多选</span>
    </div>
</div>
</div>
</template>

<script>
export default {
    setup (props) {
        //console.log(props);
        //通过props进行传值 判断如果数据拿不到 就获取sessionStorage中的数据
        if((props.playlist.creator="")){
            props.playlist.creator= JSON.parse(sessionStorage.getItem().playlist).creator  
        }

        const typeCount = (num) => {
        if(num>=100000000){
            return (num/100000000).toFixed(1) + "亿"
        }else if(num >= 10000){
            return (num/10000).toFixed(1) + "万"
        }  
    }
        return {typeCount}
    },
    props:['playlist']
}
</script>

<style lang="less" scoped>
.itemMusicTop{
    width: 100%;
    height: 50px;
    // padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    .itemLeft,.itemRight{
        width: 25%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 10px;
        span{
            font-size: 18px;
            color: white;
        }
        .icon{
            fill: white;
        }
    }
    .bgimg{
        width: 100%;
        height: 400px;
        position: fixed;
        z-index: -1;
        filter: blur(20px);//虚化背景
    }
}

.itemInfo{
    display: flex;
    width: 100%;
    height: 140px;
    padding: 10px;
    justify-content: space-between;
    .topImg{
        width: 40%;
        height: 100%;
        position: relative;
        .palyCount{
                display: flex;
                align-items: center;
                position:absolute;
                top:4px;
                right: 24px;
                font-size: 5px;
                color: white;
                background-color: rgb(49, 49, 49);
                border-radius: 6px;
                .icon{
                    margin-right: 3px;
                    width: 15px;
                    height: 15px;
                }
        }
        img{
            width: 120px;
            height: 120px;
            border-radius: 10px;
        }
    }
    .topContent{
        width: 60%;
        height: 120px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .text{
            font-size: 12px;
            color: white;
            font-weight: bold;
            overflow:hidden;
            text-overflow:ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
        .autherName{
            font-size: 6px;
            color: #efefef;
        }
        .auther{
            display: flex;
            flex-direction: row;
            align-items: center;
        }
        img{
            width: 20px;
            height: 20px;
            border-radius: 50%;
        }
        .name{
            font-size: 4px;
            color: #efefef;
        }
    }
}

.iconList{
    width: 100%;
    display: flex;
    justify-content: space-around;
    .itemIcon{
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        align-items: center;
        color: white;
        font-size: 14px;
        line-height: 14px;
        .icon{
            fill: white;
            width: 20px;
            height: 20px;
            margin-bottom: 5px;
        }
    }
}


</style>