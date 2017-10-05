const WebpackConfig = require('webpack-config').default;

const TARGET = process.env.npm_lifecycle_event;

let webpackConfig;

switch (TARGET) {
  case 'start':
  case 'serve':
    webpackConfig = './config/webpack.dev.config.js';
    break;

  default:
    webpackConfig = './config/webpack.prod.config.js';
    break;
}

module.exports = new WebpackConfig().extend(webpackConfig);
