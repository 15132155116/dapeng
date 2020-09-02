import Vue from 'vue'
import VueRouter from 'vue-router'
import live from '../components/right/live.vue'
import basic from '../components/right/basic.vue'
import mainpart from '../views/mainpart.vue'
import login from '../views/login.vue'

Vue.use(VueRouter)

const routes = [{
        path: "/login",
        component: login
    },
    {
        path: "/my",
        component: mainpart,
        children: [{
                path: 'live',
                component: live
            },
            {
                path: 'basic',
                component: basic
            }
        ],
        redirect: '/my/live'
    }
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: routes
})

export default router