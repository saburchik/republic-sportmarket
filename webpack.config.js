/* eslint-disable no-undef */
const path = require('path')
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");

// by Minin
// "dev": "cross-env NODE_ENV=development webpack --mode development", просто собирает сборку, как обычный webpack
//     "build": "cross-env NODE_ENV=production webpack --mode production", сборка с сжатием файлов
//     "watch": "cross-env NODE_ENV=development webpack --mode development --watch",
//     "start": "cross-env NODE_ENV=development webpack serve --mode development --open", не подходит
//     "client": "cross-env NODE_ENV=production webpack serve --mode production --open",

const isDev = process.env.NODE_ENV === 'development'
const filename = ext => isDev ? `js/[name].${ext}` : `js/[name].[hash].${ext}`

const babelOption = preset => {
    const opts = {
        presets: ['@babel/preset-env'],
        plugins: ["react-hot-loader/babel"]
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
        main: [
            'react-hot-loader/patch',
            'webpack-hot-middleware/client',
            '@babel/polyfill',
            './index.jsx'
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: filename('js'),
        assetModuleFilename: 'assets/[hash][ext][query]',
        publicPath: '/',
    },
    devServer: {
        port: 4200,
        hot: true
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
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.scss', '.png', '.jpg', '.jpeg'],
        alias: {
            '@assets': path.resolve(__dirname, 'src/assets')
        }
    },
    stats: {
        children: true
    },
    devtool: 'inline-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.LoaderOptionsPlugin({
            debug: true,
        }),
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: isDev ? `[name].css` : `[name].[hash].css`
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/favicon.ico'),
                    to: path.resolve(__dirname, 'dist')
                }
            ]
        })
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
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|jpg|jpeg|svg)$/,
                type: 'asset/resource'
            },
        ]
    }
}