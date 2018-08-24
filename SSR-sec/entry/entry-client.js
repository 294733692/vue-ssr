import createApp from '../src/main'

let app = createApp();

// 当使用template时，config.state作为window.__INITIAL__STATE__状态，自动嵌入到最终的html中。
// 而在客户端中，在挂载到应用程序之前，store就应该获取到状态码。
if (window.__INITIAL__STATE__) {
    app.$store.replaceState(window.__INITIAL__STATE__)
}


// 在挂载app之前调用window.onload，因为路由器必须要提前解析路由配置中的异步组件，才能正确的调用组件中可能存在的路由钩子。
// 这一步在服务器入口(entry-server.js)中实现，现在只需要更新客户端入口(entry-client.js)
window.onload = function () {
    // 挂载app
    app.$mount('#app')
}