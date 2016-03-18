var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack_debug.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  inline:true, //����ģʽ����ģʽ���޸Ĵ����webpack���Զ��������ˢ��������������ǿ������յ��޸�Ч��
  //hot:true, //��ģʽ���޸Ĵ������Զ��������������������Զ�ˢ��
  historyApiFallback: true
}).listen(3000, 'localhost', function (err, result) {
  if (err) console.log(err);
  console.log('Listening at localhost:3000');
});


