import Home from "@/views/Home";

const commonRoutes = [
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "common" */ '@/views/About.vue')
    },
    {
        path: '*',
        component: () => import (/* webpackChunkName: "common" */ '@/views/NotFoundPage.vue'),
    },
]

export default commonRoutes
