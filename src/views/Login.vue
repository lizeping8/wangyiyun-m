<template>
<div class="Login">
        <div class="text">欢迎登录</div>
        <div class="submit">
            <input type="text" name="phone" class="phone" placeholder="请输入手机号码" v-model="phone">
            <input type="password" name="password" class="password" placeholder="请输入密码" v-model="password">
            <button class="btn" @click="Login">登录</button>
        </div>
</div>
</template>

<script>
import { getLoginUser } from '@/request/api/home.js'
    export default {
        data() {
            return {
                phone:'',
                password:''
            }
        },
        methods: {
           async Login() {
             let res = await this.$store.dispatch('getLogin',{phone:this.phone,password:this.password})
             console.log(res);
             if(res.data.code === 200){ //如果返回的code = 200 说明登录成功 跳转个人中心页面
                this.$store.commit('updateIsLogin',true)
                this.$store.commit('updateToken',res.data.token)
                let result = await getLoginUser(res.data.account.id)
                console.log(result);
                this.$store.commit("updateUser",result.data.profile)
                this.$router.push('/infoUser')
             }else{
                 alert('手机账号或密码错误')
                 this.password = ''
             }
            }
        },
    }
</script>

<style lang="less" scoped>
.Login{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    padding: 10px;
    align-items: center;
    justify-content:space-around;
    background-color: rgb(230, 55, 55);
    .text{
        font-size: 40px;
        color: white;
        font-weight: 500;
    }
    .submit{
        display: flex;
        width: 100%;
        flex-direction: column;
        height: 40%;
        align-items: center;
        .phone{
            width: 80%;
            height: 40px;
            border-radius: 10px;
            border: none;
        }
        .password{
            width: 80%;
            height: 40px;
            margin-top: 20px;
            border-radius: 10px;
            border: none;
        }
        .btn{
            width: 80%;
            height: 40px;
            margin-top: 20px;
            border-radius: 10px;
            border: none;
            background-color: rgb(31, 152, 250);
            color: white;
        }
    }
}

</style>