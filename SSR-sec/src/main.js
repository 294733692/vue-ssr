import Vue from 'vue'
import App from './App.vue'

// 导出工厂函数，用于创建新的
// 应用程序、router和store实例
export function createApp() {
    return new Vue({
        render: h => h(App)
    })
}