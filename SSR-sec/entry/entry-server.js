import createApp from '../src/main'

export default (config) => {
    // 因为有可能会是异步路由钩子函数或组件，所以返回一个promise,
    // 以便服务器能够等待所有的内容在渲染前,
    // 就已经准备就绪
    return new Promise((resolve, reject) => {
        let app = createApp();
        // 往$Router里面添加url
        app.$router.push(config.url)
        // 返回目标位置或是路由匹配的组件数组(是数组的定义/构造类，不是实例).通常在服务端渲染的数据预加载的时候。
        let components = app.$router.getMatchedComponents()
        if (components.length < 0) {
            reject({ code: 500 })
        }
        // 上面返回的components是数组，所有使用promise.all对数据进行异步处理
        Promise.all(components.map(component => {
            if (component.serverRequest) {
                // 返回并将app.$store传递给home组件的serverRequest，作为其参数.
                return component.serverRequest(app.$store)
            }
        })).then(() => {
            // 将state传递到server进行处理
            config.state = app.$store.state
            resolve(app)
        })
    })
}