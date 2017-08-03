var webpack = require('webpack');
var path    = require('path');
var config  = require('../webpack.config');

config.output = {
  filename: '[name].[chunkhash:8].js',
  publicPath: '',
  path: path.resolve(__dirname, '..', 'dist')
};

config.plugins = config.plugins.concat([

  // Reduces bundles total size
  new webpack.optimize.UglifyJsPlugin({
    mangle: {

      // You can specify all variables that should not be mangled.
      // For example if your vendor dependency doesn't use modules
      // and relies on global variables. Most of angular modules relies on
      // angular global variable, so we should keep it unchanged
      except: ['$super', '$', 'exports', 'require', 'angular']
    }
  }),
  new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' }),
]);

module.exports = config;
