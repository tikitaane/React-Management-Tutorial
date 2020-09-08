// const proxy = require("http-proxy-middleware");

// module.exports = function(app) {
//   app.use(proxy("/api/customers", { target: "http://localhost:5000" }));
// };

const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      // proxy할 주소, 즉, 백단의 주소를 적어줍니다.
      target: "http://localhost:5000",
      changeOrigin: true,
    })
  );
};