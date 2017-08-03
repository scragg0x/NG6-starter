const path = require('path');
const webpack = require('webpack');
const WebpackConfig = require('webpack-config').default;

module.exports = new WebpackConfig().extend('./config/webpack.base.config.js').merge({
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '..', 'src')
  },

  devServer: {
    port: 3000,
    contentBase: '../src',
    hot: true,
    stats: {colors: true},
    inline: true,
    historyApiFallback: true
  },

  plugins: [
    // Adds webpack HMR support. It act's like livereload,
    // reloading page after webpack rebuilt modules.
    // It also updates stylesheets and inline assets without page reloading.
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({'process.env.NODE_ENV': '"development"'})
  ],
});
