import App from '@/App.vue'
import Index from '@/components/Index/Index'
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    routes: [{
        path: '/',
        component: App,
        children: [
            {
                path: '/',
                name: 'Index',
                component: Index
            },
        ]
    }]
    
})

export default router