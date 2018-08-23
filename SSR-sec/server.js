// 引入依赖包
const http = require('http')
const serverRenderer = require('vue-server-renderer')
const express = require('express');
const createApp = require('./dist/bundle.server.js')['default']
let server = express()

// 使用/代替当前目录下的dist
server.use('/', express.static(__dirname + '/dist'))

// 创建Renderer实例
let renderer = serverRenderer.createRenderer({
    template: require('fs').readFileSync('./index.template.html', 'utf-8')
})

server.get('/api/getMsg', (req, res) => {
    res.end(" hello it's me!!!")
})

server.get('*', (req, res) => {
    let config = { url: req.url }

    // createApp()创建一个带有明确状态的promise对象
    // config 参数传入到打包的bundle.server.js中 => 即也传到了entry-server,js导出的函数中
    createApp(config).then(app => {
        // 将entry-server传递过来的config.state转化为JSON格式
        let state = JSON.stringify(config.state)
        // console.log(app)  => app是Vue实例
        renderer.renderToString(app, {
            init: '<script src="/bundle.client.js"></script>',
            // 将接收到的state在index.template.html中执行
            change: `<script>window.__INITIAL__STATE__ = ${state}</script>`
        }, (err, html) => {
            res.end(html)
        })
    })
})

server.listen(3000, () => {
    console.log('server is running at 3000')
})