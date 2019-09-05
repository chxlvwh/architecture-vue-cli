// Created by xining by 2019/3/18
const webpack = require('webpack')
const path = require('path');
const address = require('address')
const needHost = address.ip() || 'localhost' // 需要更改的ip
const TerserPlugin = require('terser-webpack-plugin')

const externals = {
    'vue': 'Vue',
    'vue-router': 'VueRouter',
    'vuex': 'Vuex',
    'axios': 'axios'
}

module.exports = {

    //这里是打包正式配置 eg: outbound.ynt.ai:7001/#/login
    publicPath: '/',

    // 运行 build 命令时打包到的文件路径
    outputDir: 'dist',
    productionSourceMap: false,

    //关闭eslint规范
    lintOnSave: false,
    chainWebpack: config => {
        config.externals(externals);
        config.resolve.extensions.merge(['.js', '.vue', '.json', '.less']);
        config.resolve.alias.set('@@', path.resolve(__dirname, './public'));
        config.module
            .rule('vue')
            .test(/\.vue$/)
            .use('iview-loader')
            .loader('iview-loader')
            .options({
                prefix: true
            })
    },

    devServer: {
        host: '0.0.0.0',
        port: process.env.PORT || 8082,
        https: false,
        hotOnly: false,
        // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
        proxy: {
            '/api/': {
                target: 'http://192.168.88.126/ivr-cms/',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }, // string | Object
        before: app => {}
    },
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "windows.jQuery": "jquery"
            })
        ],
        optimization: {
            minimizer: [
                new TerserPlugin({
                    terserOptions: {
                        compress: {
                            drop_console: process.env.NODE_ENV === 'production' ? true : false,
                        },
                    },
                }),
            ],
        }
    }
}