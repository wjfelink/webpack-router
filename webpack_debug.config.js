
var webpack = require('webpack');
var path = require('path');
// 配合使用gulp打包
module.exports = {
  entry:  [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/main3.js'
  ],
  output: {
    path: path.join(__dirname, 'build'),       //__dirname 开发期间，该行代码所在的目录。
    filename: "build.js",
	publicPath: '/build/'
  },
  module: {
    loaders: [
	   //.css 文件使用 style-loader 和 css-loader 来处理
      { test: /\.css$/, loader: "style!css" },
      //.js 文件使用 jsx-loader 来编译处理
      { test: /\.js$/,loader: 'react-hot!babel-loader!jsx-loader',include: path.join(__dirname, 'src')}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()]
};