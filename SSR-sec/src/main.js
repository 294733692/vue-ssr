import Vue from 'vue'
import App from './App.vue'
import createRouter from './router'

// 导出工厂函数，用于创建新的
// 应用程序、router和store实例
export default function createApp() {
    // 创建createRouter实例
    const router = createRouter()
    return new Vue({
        // 注入router到根Vue实例
        router: createRouter(),
        render: h => h(App)
    })
}