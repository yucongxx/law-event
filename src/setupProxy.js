const proxy = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(proxy('/api', { 
        target: 'http://www.goingai.com',
        changeOrigin:true,
        // pathRewrite: {
        //     "^/api": "/"
        // }
    }))
}
