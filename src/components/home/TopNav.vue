<template>
    <div class="topNav">
        <div class="topleft">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-31liebiao"></use>
            </svg>
        </div>

        <div class="topContent">
            <span @click="$router.push('/infoUser')">我的</span>
            <span class="active">发现</span>
            <span>云村</span>
            <span>视频</span>
        </div>
        <div class="topright">
            <svg class="icon" aria-hidden="true" @click="$router.push('/search')">
                <use xlink:href="#icon-sousuo"></use>
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style lang="less" scoped>
.topNav{
    width: 100%;
    height: 50px;
    padding: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .topContent{
        width: 60%;
        display: flex;
        height: 100%;
        justify-content: space-around;
        font-size: 18px;
        .active{
            font-weight: 900;
        }
    }
}
</style>