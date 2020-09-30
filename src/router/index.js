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
  {
    path: '/hotelOffersDetail', //酒店优惠详情  
    name: 'hotelOffersDetail',
    component: () => import ('@/views/hotelOffers/hotelOffersDetail.vue'),
    meta: {
      title: '酒店优惠'
    }
  },
  {
    path: '/TourismServices', //旅游服务  
    name: 'TourismServices',
    component: () => import ('@/views/TourismServices/index.vue'),
    meta: {
      title: '旅游服务'
    }
  },
  {
    path: '/TourismServicesDetail', //旅游服务详情
    name: 'TourismServicesDetail',
    component: () => import ('@/views/TourismServices/TourismServicesDetail.vue'),
    meta: {
      title: '旅游服务'
    }
  },
  {
    path: '/medicalService', //医疗服务选择页  
    name: 'medicalService',
    component: () => import ('@/views/medicalService/index.vue'),
    meta: {
      title: '医疗服务'
    }
  },
  {
    path: '/healthContact', //保健联系人首页 
    name: 'healthContact',
    component: () => import ('@/views/medicalService/healthContact.vue'),
    meta: {
      title: '保健联系人'
    }
  },
  {
    path: '/healthContactDetail', //保健联系人详情
    name: 'healthContactDetail',
    component: () => import ('@/views/medicalService/healthContactDetail.vue'),
    meta: {
      title: '保健联系人'
    }
  },
  {
    path: '/medicalAppointment', //体检预约 
    name: 'medicalAppointment',
    component: () => import ('@/views/medicalService/medicalAppointment.vue'),
    meta: {
      title: '体检预约'
    }
  },
  {
    path: '/venuevBooking', //场地预约 
    name: 'venuevBooking',
    component: () => import ('@/views/venuevBooking/index.vue'),
    meta: {
      title: '场地预约'
    }
  },
  {
    path: '/Transportation', //交通出行 
    name: 'Transportation',
    component: () => import ('@/views/Transportation/index.vue'),
    meta: {
      title: '交通出行'
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
