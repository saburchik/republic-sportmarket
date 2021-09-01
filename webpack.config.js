const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// "start": "node backend/server.js",
// "server": "nodemon backend/server.js",
// "client": "npm start --prefix frontend",
// "dev": "concurrently \"npm run server\" \"npm run client\"",
// "data:import": "node backend/seederScript.js"

const isDev = process.env.NODE_ENV === 'development'
const filename = ext => isDev ? `main/[name].${ext}` : `main/[name].[hash].${ext}`

const babelOption = preset => {
    const opts = {
        presets: ['@babel/preset-env'],
        // plugins: ['something plugins']
    }
    if (preset) {
        opts.presets.push(preset)
    }
    return opts
}

const jsLoader = () => {
    const loaders = [{
        loader: 'babel-loader',
        options: babelOption()
    }]
    if (isDev) {
        loaders.push('eslint-loader')
    }
    return loaders
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: ['@babel/polyfill', './index.jsx'],
    },
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'images/[hash][ext][query]',
        publicPath: '/',
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
        minimizer: [
            `...`,
            new CssMinimizerPlugin(),
        ],
    },
    devtool: 'inline-source-map',
    devServer: {
        port: 4200,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: jsLoader(),
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: babelOption('@babel/preset-react')
                }
            },
            {
                test: /\.(css|scss)$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", 'postcss-loader', "sass-loader"]
            },
            {
                test: /\.(png|jpg|jpeg|svg)$/,
                type: 'asset/resource'
            },
        ]
    }
}