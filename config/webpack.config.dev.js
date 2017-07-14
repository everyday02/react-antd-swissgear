const path = require('path');
const webpack = require('webpack'); // 引入webpack，使用webpack内置插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV || 'dev';

module.exports = {
  devtool: 'source-map',
  entry: [
    'react-hot-loader/patch',
    './src/index.jsx'
  ],
  output: {
    publicPath: '/',
    path: path.join(__dirname, 'dist'),
    filename: 'bunlde.[hash].js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
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
        test: /\.(png|jpeg|jpg|gif)$/,
        loader: 'file-loader?name=img/[hash].[ext]'
      }, {
        test: /\.(scss|css)$/,
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
    // 开启服务器的模块热替换（HMR）
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    historyApiFallback: true,
    // 输出文件的路径
    publicPath: '/',
    // 和上文output的"publicPath"值保持一致
    port: 8080
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'react-antd-swissgear',
      template: 'src/index.html',
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    // 开启全局的模块热替换（HMR）
    new webpack.NamedModulesPlugin(),
    // 当模块热替换（HMR）时在浏览器控制台输出对用户更友好的模块名字信息
    new webpack.DefinePlugin({
      NODE_ENV
    })
  ]
};
