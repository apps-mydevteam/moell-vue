import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import Landing from '/src/components/Landing.vue'
import Out from '/src/components/Out.vue'
import Wa from '/src/components/Wa.vue'
import Sitemap from 'sitemap.xml'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/naturalcareforbabies',
        name: 'Natural',
        component: Landing,
    },
        {
        path: '/naturalorganic',
        name: 'Landing',
        component: Landing,
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
        path: '/sitemap.xml',
        name: 'Sitemap',
        component: Sitemap,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router