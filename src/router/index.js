import Vue from 'vue'
import VueRouter from 'vue-router'
import { setTitle } from '../assets/js/utils'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', //酒店优惠
    name: 'home',
    component: () => import ('@/views/home/index.vue'),
    meta: {
      title: '个人中心'
    }
  },
  {
    path: '/accredit',
    name: 'accredit',
    component: () => import ('@/views/home/accredit.vue'),
    meta: {
      title: '富阳人才码'
    }
  },
  {
    path: '/levelDetail',
    name: 'levelDetail',
    component: () => import ('@/views/home/levelDetail.vue'),
    meta: {
      title: '富阳人才码'
    }
  },
  {
    path: '/accessControl', //区政府大门出入
    name: 'accessControl',
    component: () => import ('@/views/accessControl/index.vue'),
    meta: {
      title: '区政府大门出入'
    }
  },
  {
    path: '/hotelOffers', //酒店优惠
    name: 'hotelOffers',
    component: () => import ('@/views/hotelOffers/index.vue'),
    meta: {
      title: '酒店优惠'
    }
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

/* 设置标题 检查token是否过期 */
router.beforeEach((to, from, next) => {
  to.meta && setTitle(to.meta.title)
  next()
})

export default router
