const path = require('path');
const webpack = require('webpack');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const CleanWebpackPluginConfig = new CleanWebpackPlugin('dist');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './index.html',
  filename: 'index.html',
  inject: 'body'
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
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
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
    CleanWebpackPluginConfig
  //   new webpack.optimize.CommonsChunkPlugin({
  //     name: 'commons',
  //     filename: 'commons.js',
  //     minChunks: 2,
  //   }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './src'),
  },
}