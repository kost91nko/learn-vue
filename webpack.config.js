const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    vendor: './src/vendor.js',
    app: './src/index.js'
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    chunkFilename: '[id].[chunkhash].js'
  },

  resolve: {
    modules: [
      'node_modules',
    ],
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },

  devtool: 'source-map',

  // What information should be printed to the console
  stats: {
    colors: true,
    reasons: true,
    hash: false,
    version: true,
    timings: true,
    chunks: false,
    chunkModules: false,
    children: false,
    cached: true,
    cachedAssets: false,
    modules: true,
  },

  devServer: {
    stats: {
      assets: true,
      colors: true,
      reasons: false,
      hash: false,
      version: true,
      timings: true,
      chunks: true,
      chunkModules: false,
      chunkOrigins: false,
      children: true,
      cached: true,
      cachedAssets: true,
      errorDetails: true,
      modules: false,
      source: true
    },
    host: '0.0.0.0',
    port: 8080,
    open: false
  },


  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor']
    }),

    new webpack.ProvidePlugin({
      'Vue': 'vue',
    }),

    // Plugin for webpack 2
    new webpack.LoaderOptionsPlugin({
      debug: true,
      minimize: false,
      options: {
        context: path.resolve(__dirname, '.'),
        output: {
          path: path.resolve(__dirname, './dist'),
        },
      },
    }),

    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, './src')
        ],
        loader: 'babel-loader'
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'
      },
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader"
      }
    ],
  },
}
