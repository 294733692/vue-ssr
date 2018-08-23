import Vue from 'vue'
import App from './App.vue'
import createRouter from './router'
import createStore from './store'



// 导出工厂函数，用于创建新的
// 应用程序、router和store实例
export default function createApp() {
    return new Vue({
        // 注入router到根Vue实例
        router: createRouter(),
        // 注入store到根vue实例
        store: createStore(),
        render: h => h(App)
    })
}