const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
  	app: './app.js',
    vendor: ['react', 'react-dom'],
  },
  output: {
    path: path.resolve(__dirname, './dist/assets'),
    filename: '[name].bundle.js',
    publicPath: '/assets'
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
      }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules']
    // modules: ['node_modules', 'src'],
    // alias: {
    //   'bootstrap-css': path.join(__dirname, '../node_modules/bootstrap/dist/bootstrap.min.css')
    // }
  },
  // plugins: [
  //   new webpack.optimize.CommonsChunkPlugin({
  //     name: 'commons',
  //     filename: 'commons.js',
  //     minChunks: 2,
  //   }),
  // ],
  devServer: {
    contentBase: path.resolve(__dirname, './src'),
  },
}