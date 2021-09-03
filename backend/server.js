/* eslint-disable no-undef */
require('dotenv').config()
const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware');
const connectDB = require("./config/db")
const productRoutes = require('./routes/productRoutes');

connectDB();

const app = express()
const webConfig = require('../webpack.config')
const compiler = webpack(webConfig)
app.use(express.json())

app.use(
    webpackDevMiddleware(compiler, {
        publicPath: webConfig.output.publicPath,
    })
)
app.use(webpackHotMiddleware(compiler));

app.use('/api/products', productRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

if (module.hot) {
    module.hot.accept('./index.jsx', function () {
        console.log('Updating..');
        printMe();
    })
}