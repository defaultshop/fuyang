import Vue from 'vue'
import VueRouter from 'vue-router'
import { setTitle } from '../assets/js/utils'

Vue.use(VueRouter)

const routes = [
  {
    path: '/accessControl', //区政府大门出入
    name: 'accessControl',
    component: () => import ('@/views/accessControl/index.vue'),
    meta: {
      title: '区政府大门出入'
    }
  }
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
