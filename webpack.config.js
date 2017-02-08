const path = require('path');
const webpack = require('webpack');

// plugins
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CleanWebpackPluginConfig = new CleanWebpackPlugin('dist');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
  	app: './app.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'assets/[name].bundle.js'//,
    // publicPath: '/assets'
  },
  module: {
    rules: [
      {
        test: /\.(woff2?|ttf|eot|svg)$/,
        use: ['url-loader']
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          'style-loader',
          'css-loader', 
          'sass-loader'
        ]
      },
      // target app specific files
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        include: path.join(__dirname, 'src')
      },
      // target vendor files - exclude app specific styles
      {
        test: /\.css$/,
        exclude: path.join(__dirname, 'src'),
        use: ExtractTextPlugin.extract(['css-loader'])
      },
      { 
        test: /\.(js|jsx)$/, 
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        },
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules']
  },
  plugins: [ 
    HtmlWebpackPluginConfig, 
    CleanWebpackPluginConfig,
    CommonsChunkPluginConfig,
    new ExtractTextPlugin('styles/vendor.css')
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './src')
  },
}