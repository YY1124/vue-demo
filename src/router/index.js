import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import home from '@/views/home.vue'

// 配置信息中需要页面的相关配置
const routes =[
    {
        path:'/',
        name:'home',
        component:home
    },
    {
        path:'/about',
        name:'about',
        redirect:'/about/us',
        component:() => import('../views/about.vue'),
        children:[
            { //二级导航不要加斜杠
            path:'info',
            name:'info',
            component:() => import('../views/aboutsub/aboutInfo.vue'),
           },
           {
            path:'us',
            name:'us',
            component:() => import('../views/aboutsub/aboutUs.vue'),
        },
    ]
    },
    {
        path:'/news',
        name:'news',
        component:() => import('../views/news.vue') //异步加载方式
    },
    {
        path:'/newsDetail/:name',
        name:'newsDetail',
        component:() => import('../views/newsDetail.vue') //异步加载方式
    },

]
const router = createRouter({
    // history: createWebHistory(), //此种方式需要后台做重定向，否则会出现404的问题
    history:createWebHashHistory(),
    routes

})

export default router;