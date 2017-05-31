import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'

Vue.use(Router)

const Index = new Router({
    routes: [{
        path: '/',
        name: 'Hello',
        component: Hello
    }]
})

export default Index
