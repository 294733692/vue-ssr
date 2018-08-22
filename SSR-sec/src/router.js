import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import home from './components/home.vue'
import about from './components/about.vue'
import test from './components/test.vue'

// 导出createRouter方法
export default function createRouter() {
    // 返回一个Router对象
    return new VueRouter({
        // 
        mode: 'history',
        // 配置路由
        routes: [
            {
                path: '/',
                component: home
            },
            {
                path: '/about',
                component: about
            },
            {
                path: '/test',
                component: test
            }
        ]
    })
}