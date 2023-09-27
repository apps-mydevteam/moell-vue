import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import Preview from '/src/components/Preview.vue'
import Landing from '/src/components/Landing.vue'
import Out from '/src/components/Out.vue'
import Wa from '/src/components/Wa.vue'
import Shopee from '/src/components/Shopee.vue'
import Lazada from '/src/components/Lazada.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Preview,
    },
    {
        path: '/naturalcareforbabies',
        name: 'Natural',
        component: Preview,
    },
    {
        path: '/naturalorganic',
        name: 'Landing',
        component: Preview,
    },
    {
        path: '/preview',
        name: 'Preview',
        component: Preview,
    },
    {
        path: '/out',
        name: 'Out',
        component: Out,
    },
    {
        path: '/wa',
        name: 'Wa',
        component: Wa,
    },
    {
        path: '/shopee',
        name: 'Shopee',
        component: Shopee,
    },
        {
        path: '/lazada',
        name: 'Lazada',
        component: Lazada,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router