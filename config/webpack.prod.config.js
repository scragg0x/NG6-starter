const path = require('path');
const webpack = require('webpack');
const WebpackConfig = require('webpack-config').default;

module.exports = new WebpackConfig().extend('./config/webpack.base.config.js').merge({
  output: {
    filename: '[name].bundle.js',
    publicPath: '',
    path: path.resolve(__dirname, '..', 'dist')
  },

  plugins: [
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
  ],
});
