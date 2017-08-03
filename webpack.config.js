var path    = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {
    app: [
      'babel-polyfill',
      path.join(__dirname, process.env.npm_package_main)
    ]
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'ng-annotate-loader!babel-loader' },
      { test: /\.html$/, loader: 'raw-loader' },
      { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(scss|sass)$/, loader: 'style-loader!css-loader!sass-loader' },
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
      {
        test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)(\?.*)?$/,
        loader: 'file-loader',
        query: {
          name: 'static/media/[name].[ext]',
        },
      },
    ]
  },
  plugins: [
    // Injects bundles in your index.html instead of wiring all manually.
    // It also adds hash to all injected assets so we don't have problems
    // with cache purging during deployment.
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body',
      hash: true,
      chunks: ['vendor', 'app']
    }),

    // Automatically move all modules defined outside of application directory to vendor bundle.
    // If you are using more complicated project structure, consider to specify common chunks manually.
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: module => /node_modules/.test(module.resource)
    })
  ]
};
