const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')
module.exports = {
    // publicPath: process.env.NODE_ENV === 'production' ? '../website/' : '/',
    publicPath:  './',
    outputDir: 'fyProject',
    lintOnSave: true, //不需要使用eslint，把lintOnSave设为false即可
    // 设为false打包时不生成.map文件
    productionSourceMap: false,
    // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
    devServer: {
        port: 18081, // 端口
        proxy: 'http://115.236.162.166:18081/talentCard/app',
        headers:{
            'Access-Control-Allow-Origin':'*',
        },
        hotOnly:false,
        disableHostCheck: true,
    },
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    autoprefixer(),
                    pxtorem({
                        rootValue: 100,
                        propList: ['*'],
                        selectorBlackList: ['van-circle__layer']
                    })
                ]
            }
        }
    },
};
