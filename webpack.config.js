var path = require('path');
// 分离css插件
let ExtractTextPlugin = require('extract-text-webpack-plugin');
// 分离css插件配置
let extractSCSS = new ExtractTextPlugin('stylesheets/[name].css');
module.exports = {
    devtool: 'inline-source-map',                                   // 启用source-map
    entry: './src/app.js',                                          // 入口文件
    debug: true,
    output: {
        path: path.join(__dirname, 'main'),                         // 打包输出的路径
        filename: 'main.js',                                        // 打包输出的文件名
        publicPath: './main/'                                       // html引用路径
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: 'style!css?sourceMap!sass?sourceMap'
            }, {
                test: /\.(es6)|(js)$/,
                loader: 'babel?presets[]=es2015'
            }, {
                test: /\.vue$/,
                loader: 'vue'
            }
        ]
    },
    plugins: [
        extractSCSS
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.min.js'
        }
    }
};