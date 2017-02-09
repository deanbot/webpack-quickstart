const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// plugin config
const CleanWebpackPluginConfig = new CleanWebpackPlugin('dist');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './index.html',
  filename: 'index.html',
  inject: 'body'
});
const CommonsChunkPluginConfig = new webpack.optimize.CommonsChunkPlugin({
  name: 'commons',
  filename: 'assets/commons.js',
  minChunks: 2,
});
const SourceMapDevToolPlugin = new webpack.SourceMapDevToolPlugin();
const ExtractVendorCss = new ExtractTextPlugin('styles/vendor.css');

// config
const paths = {
  src: path.resolve(__dirname, './src'),
  dist: path.resolve(__dirname, './dist')
};

module.exports = {
  context: paths.src,
  entry: {
  	app: './app.js'
  },
  output: {
    path: paths.dist,
    filename: 'assets/[name].bundle.js'
  },
  module: {
    rules: [
      // load es6/jsx
      { 
        test: /\.(js|jsx)$/, 
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        },
        include: [
          paths.src,
        ]
      },

      // load styles
      {
        test: /\.(sass|scss)$/,
        use: ['style-loader', 'css-loader?sourceMap', 'autoprefixer-loader', 'sass-loader']
      },

      // load app styles - include only css from source
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader?sourceMap'],
        include: paths.src
      },

      // load vendor styles - exclude css from source
      {
        test: /\.css$/,
        use: ExtractVendorCss.extract(['css-loader?sourceMap']),
        exclude: paths.src
      },

      // load images
      {
        test: /\.(jpg|jpeg|gif|png)$/,
        exclude: /node_modules/,
        loader:'url-loader',
        query: {
          limit: 25000,
          name: './images/[sha512:hash:base64:7].[ext]'
        }
      },

      // load fonts
      {
        test: /\.(woff2?|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: 'file-loader?name=./fonts/[name].[ext]'
      }
    ]
  },

  resolve: {
    modules: [paths.src, 'node_modules'],

    // Allow to omit extensions when requiring these files
    extensions: ['.js', '.jsx'],
  },

  plugins: [ 
    HtmlWebpackPluginConfig, 
    CleanWebpackPluginConfig,
    CommonsChunkPluginConfig,
    ExtractVendorCss,
    SourceMapDevToolPlugin
  ],

  devServer: {
    contentBase: paths.src
  },
} 