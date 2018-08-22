// 引入依赖包
const http = require('http')
const serverRenderer = require('vue-server-renderer')
const express = require('express');

// const createApp = function () { }
const createApp = require('./dist/bundle.server.js')['default']
// console.log(createApp());

let server = express()

// 创建Renderer实例
let renderer = serverRenderer.createRenderer({
    template: require('fs').readFileSync('./index.template.html', 'utf-8')
})

server.get('*', (req, res) => {
    // console.log(req.url)  //查看跳转网址
    let config = { url: req.url }
    console.log(config)

    // createApp()创建一个带有明确状态的promise对象
    // config 参数传入到打包的bundle.server.js中 => 即也传到了entry-server,js导出的函数中
    createApp(config).then(app => {
        // console.log(app)  => app是Vue实例
        renderer.renderToString(app, (err, html) => {
            res.end(html)
        })
    })
})

server.listen(3000, () => {
    console.log('server is running at 3000')
})