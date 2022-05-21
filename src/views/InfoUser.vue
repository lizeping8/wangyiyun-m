<template>
    <div class="infoUserTop">
        <img :src="user.avatarUrl" alt="" class="profileImg">
        <div class="name">{{user.nickname}}</div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
    export default {
        computed: {
            ...mapState(['user'])
        },
        
    }
</script>

<style lang="less" scoped>
.infoUserTop{
    width: 100%;
    height: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    .profileImg{
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
}
.name{
    font-weight: 700;
    font-size: 20px;
}
}

</style>