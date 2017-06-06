import Vue from 'vue'
import Router from 'vue-router'
import App from 'app'
import Index from 'pages/Index'
import Profile from 'pages/Profile'
import Discover from 'pages/Discover'
import Album from 'pages/Album'
import Mv from 'pages/Mv'
import Classify from 'pages/Classify'
import Rank from 'pages/Rank'
import Singer from 'pages/Singer'
import Diantai from 'pages/Diantai'

Vue.use(Router)

const router = new Router({
    routes: [{
        path: '/',
        name: 'app',
        component: App,
        redirect: '/index',
        children: [{
            path: '/index',
            name: 'Index',
            component: Index
        }, {
            path: '/profile',
            name: 'Profile',
            component: Profile
        }, {
            path: '/discover',
            name: 'Discover',
            component: Discover
        }]
    }, {
        path: '/album',
        name: 'Album',
        component: Album
    }, {
        path: '/mv',
        name: 'mv',
        component: Mv
    }, {
        path: '/classify',
        name: 'classify',
        component: Classify
    }, {
        path: '/rank',
        name: 'rank',
        component: Rank
    }, {
        path: '/singer',
        name: 'singer',
        component: Singer
    }, {
        path: '/Diantai',
        name: 'diantai',
        component: Diantai
    }]
})

export default router
