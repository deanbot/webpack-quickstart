import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ExtractTextPlugin from "extract-text-webpack-plugin";
import WebpackMd5Hash from "webpack-md5-hash";
// import autoprefixer from "autoprefixer";
import path from "path";

const GLOBALS = {
  "process.env.NODE_ENV": JSON.stringify("production"),
  __DEV__: false
};

// plugins
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: "./index.html",
  filename: "index.html",
  inject: "body"
});
const CommonsChunkPluginConfig = new webpack.optimize.CommonsChunkPlugin({
  name: "commons",
  filename: "assets/commons.js",
  minChunks: 2
});
const SourceMapDevToolPlugin = new webpack.SourceMapDevToolPlugin();
const ExtractVendorCss = new ExtractTextPlugin("styles/vendor.css");
const ExtractAppCss = new ExtractTextPlugin("styles/app.css");

// config
const paths = {
  src: path.resolve(__dirname, "./src"),
  dist: path.resolve(__dirname, "./dist")
};

export default {
  devtool: "source-map",
  context: paths.src,
  entry: path.resolve(__dirname, "src/index"),
  target: "web",
  output: {
    path: paths.dist,
    filename: "assets/[name].bundle.js"
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
          use: "css-loader?sourceMap!autoprefixer-loader!sass-loader"
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
            loader: "url-loader",
            query: {
              limit: 10000,
              name: "./images/[sha512:hash:base64:7].[ext]"
            }
          },
          {
            loader: "image-webpack-loader",
            query: {
              progressive: true,
              optimizationLevel: 7,
              interlaced: false
            }
          }
        ]
      },

      // load fonts
      {
        test: /\.(woff2?|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: "file-loader?name=./fonts/[name].[ext]"
      }
    ]
  },
  resolve: {
    modules: [paths.src, "node_modules"],

    // Allow to omit extensions when requiring these files
    extensions: [".js", ".jsx"]
  },

  plugins: [
    new WebpackMd5Hash(),
    new webpack.DefinePlugin(GLOBALS),
    HtmlWebpackPluginConfig,
    CommonsChunkPluginConfig,
    new webpack.optimize.UglifyJsPlugin({ sourceMap: true }),
    ExtractAppCss,
    ExtractVendorCss,
    SourceMapDevToolPlugin
  ]
};
