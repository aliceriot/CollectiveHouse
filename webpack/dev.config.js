const WebpackNotifierPlugin = require('webpack-notifier');
const config = require('./../webpack.config');

config.plugins.push(new WebpackNotifierPlugin());
config.devtool = 'eval-source-map';
config.devServer = {
  host: '0.0.0.0'
};

module.exports = config;
