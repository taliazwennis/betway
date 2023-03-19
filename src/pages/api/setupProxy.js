const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://fn-uks-dev-eng-fe-mock-svc.azurewebsites.net',
      changeOrigin: true,
    })
  );
};