const path = require('path');
const webpack = require('webpack'); // 引入webpack，使用webpack内置插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TransferWebpackPlugin = require('transfer-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV || 'dev';

const ANTD_THEME = require('./src/config/antd.theme');

module.exports = {
  devtool: 'source-map',
  entry: [
    'react-hot-loader/patch',
    // './src/theme/styles.scss',
    './src/index.jsx'
  ],
  output: {
    publicPath: '/',
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  // alias是配置全局的路径入口名称，只要涉及到下面配置的文件路径，可以直接用定义的单个字母表示整个路径
  resolve: {
    extensions: ['.js', '.jsx', '.less', '.scss', '.css'],
    modules: [
        path.join(__dirname, 'node_modules'),
        path.join(__dirname, 'src')
    ],
    alias: {
      '#': path.join(__dirname, 'src'),    // src根目录
      '@': path.join(__dirname, 'src/app'),   // app根路径
      '&': path.join(__dirname, 'static')     // 静态文件
    }
  },
  externals: {
  // jquery: 'window.jQuery'
  },
  module: {
    loaders: [
      {
        // 也可以多文件后缀：/\.(js|jsx)$/
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(svg|eot|woff|woff2|ttf|png|jpeg|jpg|gif)$/,
        loader: 'file-loader?name=img/[hash].[ext]'
      }, {
        test: /\.(less)$/,
        use: [
          'style-loader',
          'css-loader',
          'resolve-url-loader',
          { loader: 'less-loader', options: { sourceMap: true, modifyVars: ANTD_THEME } }
        ]
      }, {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'resolve-url-loader',
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      }
    ]
  },
  devServer: {
    hot: true,
    // hotOnly: true,
    // 开启服务器的模块热替换（HMR）
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    historyApiFallback: true,
    port: 8080
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: path.join(__dirname, 'static/images/logo.ico'),
      title: 'react-antd-swissgear',
      template: 'src/index.html',
      filename: 'index.html'
    }),
    // 把指定文件夹下的文件复制到发布目录，这样可以通过地址栏静态访问
    new TransferWebpackPlugin([
      { from: 'static', to: 'static' }
    ], path.resolve(__dirname, '')),
    new webpack.HotModuleReplacementPlugin(),
    // 开启全局的模块热替换（HMR）
    new webpack.NamedModulesPlugin(),
    // 当模块热替换（HMR）时在浏览器控制台输出对用户更友好的模块名字信息
    new webpack.DefinePlugin({
      NODE_ENV
    })
  ]
};
