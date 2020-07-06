import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../pages/index'
import ArticleList from '../components/ArticleList'
import Dota2 from '../components/Dota2Index'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Index,
        children: [{
            path: '',
            name: 'articleList',
            component: ArticleList
        }, {
            path: 'dota2',
            name: 'dota2',
            component: Dota2
        },]
    }
]

const router = new VueRouter({
    routes
})

export default router