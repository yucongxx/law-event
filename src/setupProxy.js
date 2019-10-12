const proxy = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(proxy('/api', { 
        target: 'http://www.goingai.com:8080/',
        changeOrigin:true,
        pathRewrite: {
            "^/api": "/"
        }
    }))
}
