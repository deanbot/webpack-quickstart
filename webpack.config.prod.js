// For info on how we're generating bundles with hashed filenames for cache busting: https://medium.com/@okonetchnikov/long-term-caching-of-static-assets-with-webpack-1ecb139adb95#.w99i89nsz

import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ExtractTextPlugin from "extract-text-webpack-plugin";
import WebpackMd5Hash from "webpack-md5-hash";
import autoprefixer from "autoprefixer";
import path from "path";

const GLOBALS = {
  "process.env.NODE_ENV": JSON.stringify("production"),
  __DEV__: false
};

// plugins
const ExtractVendorCss = new ExtractTextPlugin(
  "styles/vendor.[contenthash].css"
);
const ExtractAppCss = new ExtractTextPlugin("styles/[name].[contenthash].css");
const paths = {
  src: path.resolve(__dirname, "./src"),
  dist: path.resolve(__dirname, "./dist")
};

export default {
  resolve: {
    extensions: ["*", ".js", ".jsx", ".json"]
  },
  devtool: "source-map",
  entry: path.resolve(__dirname, "src/index"),
  target: "web",
  output: {
    path: paths.dist,
    publicPath: "/",
    filename: "[name].[chunkhash].js"
  },
  module: {
    rules: [
      // load es6/jsx
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        query: {
          presets: ["es2015", "react"]
        },
        include: [paths.src]
      },

      // load styles
      {
        test: /\.(sass|scss)$/,
        use: ExtractAppCss.extract({
          fallback: "style-loader",
          use: "css-loader?sourceMap!postcss-loader!sass-loader?sourceMap"
        })
      },

      // load app styles - include only css from source
      {
        test: /\.css$/,
        use: ExtractAppCss.extract({
          fallback: "style-loader",
          use: "css-loader?sourceMap"
        }),
        include: paths.src
      },

      // load vendor styles - exclude css from source
      {
        test: /\.css$/,
        use: ExtractVendorCss.extract(["css-loader?sourceMap"]),
        exclude: paths.src
      },

      // load images
      {
        test: /\.(jpg|jpeg|gif|png)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "file-loader?name=[name].[ext]"
          } /*,
          {
            loader: "image-webpack-loader",
            query: {
              progressive: true,
              optimizationLevel: 7,
              interlaced: false
            }
          }*/
        ]
      },

      // load fonts
      {
        test: /\.eot(\?v=\d+.\d+.\d+)?$/,
        loader: "url-loader?name=[name].[ext]"
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff&name=[name].[ext]"
      },
      {
        test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=application/octet-stream&name=[name].[ext]"
      },
      {
        test: /\.svg(\?v=\d+.\d+.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=image/svg+xml&name=[name].[ext]"
      }
    ]
  },

  plugins: [
    // Hash the files using MD5 so that their names change when the content changes.
    new WebpackMd5Hash(),

    // Tells React to build in prod mode. https://facebook.github.io/react/downloads.html
    new webpack.DefinePlugin(GLOBALS),
    ExtractVendorCss,
    ExtractAppCss,

    // Generate HTML file that contains references to generated bundles. See here for how this works: https://github.com/ampedandwired/html-webpack-plugin#basic-usage
    new HtmlWebpackPlugin({
      template: "src/index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true
    }),

    // new webpack.optimize.CommonsChunkPlugin({
    //   name: "commons",
    //   filename: "assets/commons.js",
    //   minChunks: 2
    // }),

    // Minify JS
    new webpack.optimize.UglifyJsPlugin({ sourceMap: true }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
      noInfo: true, // set to false to see a list of every file being bundled.
      options: {
        sassLoader: {
          includePaths: [path.resolve(__dirname, "src", "scss")]
        },
        context: "/",
        postcss: () => [autoprefixer]
      }
    })
  ]
};
