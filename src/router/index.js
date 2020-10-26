import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/App.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name : 'main',
        component: App
    },
    {
        path: '/:title',
        name : 'Project',
        component: App
    },
    {
        path: '*',
        redirect: '/'
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router