var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack_debug.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  inline:true, //内联模式，该模式下修改代码后，webpack将自动打包并且刷新浏览器，让我们看到最终的修改效果
  //hot:true, //该模式下修改代码后会自动打包，但是浏览器不会自动刷新
  historyApiFallback: true
}).listen(3000, 'localhost', function (err, result) {
  if (err) console.log(err);
  console.log('Listening at localhost:3000');
});


