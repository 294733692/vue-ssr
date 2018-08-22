// 引入依赖包
var http = require('http')
var Vue = require('vue')
var serverRenderer = require('vue-server-renderer')
// 创建Vue实例
var app = new Vue({
    template: `<div>
        <my-component/>        
    </div>`,
    components: {
        myComponent: {
            template: `<div>this is ssr !!!</div>`
        }
    }
})
// 创建Renderer实例
var renderer = serverRenderer.createRenderer({
    template: require('fs').readFileSync('./index.template.html', 'utf-8')
})
// 将Vue实例转化为HTML字符串
http.createServer((req, res) => {
    renderer.renderToString(app, {
        init: `<script>console.log('aaa')</script>`
    }, function (err, html) {
        res.end(html)
    })
}).listen(3000)