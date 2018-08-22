// 引入依赖包
const http = require('http')
const serverRenderer = require('vue-server-renderer')
const express = require('express');

// const createApp = function () { }
const createApp = require('./dist/bundle.server.js')['default']

let server = express()

// 创建Renderer实例
let renderer = serverRenderer.createRenderer({
    template: require('fs').readFileSync('./index.template.html', 'utf-8')
})

server.get('*', (req, res) => {
    createApp().then(app => {
        // console.log(app)  => app是Vue实例
        renderer.renderToString(app, (err, html) => {
            res.end(html)
        })
    })
})

server.listen(3000, () => {
    console.log('server is running at 3000')
})