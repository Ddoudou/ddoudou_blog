import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../pages/index'
import Home from '../pages/home'


Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        component:Index,
        children:[{
            path:'',
            name:'home',
            component:Home
        }]
    }
]

const router = new VueRouter({
    routes
})

export default router