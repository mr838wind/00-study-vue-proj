import Vue from 'vue'
import VueRouter from 'vue-router'
import commonRoutes from "@/router/modules/common-routes";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
    ...commonRoutes

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
