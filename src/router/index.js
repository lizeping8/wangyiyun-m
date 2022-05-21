import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store/index.js'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/itemMusic',
    name: 'ItemMusic',
    component: () => import('../views/ItemMusic')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/Search')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login')
  },
  {
    path: '/infoUser',
    name: 'InfoUser',
    beforeEnter: (to, from, next) => {
      if(store.state.isLogins || store.state.token || localStorage.getItem('token')){
        next()
      }else{
        next('/login')
      }
    },
    component: () => import('../views/InfoUser')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to,from)=>{
  if(to.path=='/login'){
    store.state.isFooterMusic = false
  }else{
    store.state.isFooterMusic = true
  }
})
export default router
