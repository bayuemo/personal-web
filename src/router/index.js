import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import WaterFallPage from '../views/WaterFallPage.vue'
import Wxapp from '../views/Wxapp.vue'
import VirtualList from "../views/VirtualList.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/waterfallPage',
    name: 'WaterFallPage',
    component: WaterFallPage
  },
  {
    path: '/wxapp',
    name: 'Wxapp',
    component: Wxapp
  },
  {
    path: '/virtualList',
    name: 'VirtualList',
    component: VirtualList,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
