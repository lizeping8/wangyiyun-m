<template>
  <div class="home">
    <TopNav></TopNav>
    <SwpierTop></SwpierTop>
    <iconList></iconList>
    <musicList></musicList>
  </div>
</template>

<script>
import TopNav from '@/components/home/TopNav'
import SwpierTop from '@/components/home/SwpierTop'
import iconList from '@/components/home/iconList'
import musicList from '@/components/home/musicList'
export default {
  name: 'Home',
  components: {
    TopNav,
    SwpierTop,
    iconList,
    musicList
  }
}
</script>
