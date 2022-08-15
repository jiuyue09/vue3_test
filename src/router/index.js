import { createRouter, createWebHashHistory  } from 'vue-router'

import Home from '../pages/home.vue'
import About from '../pages/about.vue'
import Animate from '../pages/animate.vue'

const routes = [
    {
        path:'/',
        name:'Home',
        component:Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/animate',
        name: 'Animate',
        component:Animate
    }
];

const router = createRouter({history:createWebHashHistory(),routes})

export default router;