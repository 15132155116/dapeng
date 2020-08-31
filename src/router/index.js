import Vue from 'vue'
import VueRouter from 'vue-router'
import live from '../components/right/live.vue'
import basic from '../components/right/basic.vue'

Vue.use(VueRouter)

const routes = [{
        path: 'live',
        name: 'live',
        component: live
    },
    {
        path: 'basic',
        name: 'basic',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: basic
    }
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router