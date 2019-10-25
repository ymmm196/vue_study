const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = {

    // 入口
    entry: {
        main: './src/main.jsx',
    },

    // 出口(编译后文件处理)
    output: {
        // 打包后文件存放的位置
        path: path.join(__dirname, './dist'),
        // 打包后输出的文件名
        filename: 'bundle-[name]-[hash].js',
        // publicPath: 打包后index.html代码中文件引用前缀（如：src,href等）

    },
    resolve: {
        alias: {
            // 'vue$':'vue/dist/vue.js', //解决Vue单文件组件不能使用template的问题
            '@': path.resolve('src'),
            '@@': path.resolve('src/components'),
            '~': path.resolve('src/pages'),
        },
        extensions: ['.js', '.jsx']
    },
    // 测试服务器
    devServer: {
        // 服务器路径（默认：项目的根目录）
        contentBase: path.join(__dirname, './src'),
        // 是否自动打开浏览器
        open: false,
    },
    // 加载器 loader
    module: {
        rules: [{
            // 一个用以匹配loaders所处理的文件夹的拓展名的正则表达式
            test: /\.jsx?$/,
            use: [{
                loader: 'babel-loader',
                // options: {
                //     presets: ['@babel/preset-react']
                // }
            }],
            include: path.join(__dirname, './src')
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }]
    },
    // 插件
    plugins: [
        // 删除dist文件夹
        new CleanWebpackPlugin(),
        // 创建dist文件
        new HtmlWebpackPlugin({
            template: './src/test.html',
            // filename:'index.html'
        })
    ]
}