module.exports = {
  devServer: {
    // https: true, // 启用 HTTPS
    hot: true,
    host: '0.0.0.0',
    historyApiFallback: true,
    client: {
      webSocketURL: 'auto://0.0.0.0:8080/ws', // 自动选择 ws/wss
    },
    allowedHosts: 'all', // 允许所有 Host（或指定 ngrok 域名）
    proxy: {
      '/api': {
        target: process.env.VUE_APP_API_BASE_URL || 'https://benge-vision-production.up.railway.app',//
        changeOrigin: true,
        secure: false,//
        pathRewrite: { '^/api': '/api' },
        allowedHosts: 'all'
      }
    }
  }
};