const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = {
  devServer: {
    before: function(app) {
      app.use(
        'iframeSource',
        createProxyMiddleware({ 
          target: 'https://crowdtest.me/', // URL do conteúdo do iframe
          changeOrigin: true
        })
      );
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
}
