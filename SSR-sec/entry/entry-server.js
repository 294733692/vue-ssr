import createApp from '../src/main'

export default (config) => {
    // 因为有可能会是异步路由钩子函数或组件，所以返回一个promise,
    // 以便服务器能够等待所有的内容在渲染前,
    // 就已经准备就绪
    return new Promise((resolve, reject) => {
        let app = createApp();
        // 往$Router里面添加url
        app.$router.push(config.url)
        resolve(app);
    })
}