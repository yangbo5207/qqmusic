import Vue from 'vue'
import Router from 'vue-router'
import Index from 'pages/Index'
import Profile from 'pages/Profile'
import Discover from 'pages/Discover'
import Album from 'pages/Album'

Vue.use(Router)

const router = new Router({
    routes: [{
        path: '/',
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
    }, {
        path: '/album',
        name: 'Album',
        component: Album
    }]
})

export default router
