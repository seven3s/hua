var webpack = require('webpack');
var path = require('path');
 
module.exports = {
    //页面入口文件配置
    entry: {
        index : './src/app/index.js'
    },
    //入口文件输出配置
    output: {
        path: './dist/js/',
        publicPath: './js/',
        filename: '[name].js'
    },
    module: {
        loaders: [
            // {
            //     test: /\.js$/,
            //     loader: 'babel-loader?experimental',
            //     exclude: /node_modules/
            // },
            {test: /\.html$/, loader: 'html-loader'},
            {test: /\.css$/, loader: 'style!css'},
            // {test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader'},
            // {test: /\.(png|jpg|gif)$/i, loader: 'url-loader?limit=8192'}
            {test: /\.(png|jpg|gif)$/i, loader: 'file-loader?name=../img/[name].[ext]'}
        ]
    },
    resolve: {
        extensions: ['', '.js'],
        modulesDirectories: ['web_modules', 'node_modules'],
        alias: {
            vue: path.join(__dirname, './node_modules/vue'),
            vueRouter: path.join(__dirname, './vue-router')
        }
    }
};