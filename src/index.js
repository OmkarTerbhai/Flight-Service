const { ServerConfig, Logger } = require('./src/config');
const express = require('express');
const apiRoutes = require('./src/routes');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, () => {
    console.log("Successfully started the server on port :"+ServerConfig.PORT);
    Logger.info("Successfully started server", {});
})
