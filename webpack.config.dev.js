import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ExtractTextPlugin from "extract-text-webpack-plugin";
import path from "path";

const ExtractVendorCss = new ExtractTextPlugin("styles/vendor.css");

// config
const paths = {
  src: path.resolve(__dirname, "./src"),
  dist: path.resolve(__dirname, "./dist")
};

export default {
  context: paths.src,
  entry: [
    // must be first entry to properly set public path
    "./src/webpack-public-path",
    "webpack-hot-middleware/client?reload=true",
    path.resolve(__dirname, "src/index.js") // Defining path seems necessary for this to work consistently on Windows machines.
  ],
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
        exclude: /node_modules/,
        loader: "babel-loader"
      },

      // load styles
      {
        test: /\.(sass|scss)$/,
        use: [
          "style-loader",
          "css-loader?sourceMap",
          "autoprefixer-loader",
          "sass-loader"
        ]
      },

      // load app styles - include only css from source
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader?sourceMap"],
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
        test: /\.(jpe?g|png|gif)$/i,
        loader: "file-loader?name=[name].[ext]"
      },

      // load fonts
      {
        test: /\.eot(\?v=\d+.\d+.\d+)?$/,
        loader: "file-loader"
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=application/octet-stream"
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=image/svg+xml"
      }
    ]
  },

  resolve: {
    modules: [paths.src, "node_modules"],

    // Allow to omit extensions when requiring these files
    extensions: [".js", ".jsx"]
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development"), // Tells React to build in either dev or prod modes. https://facebook.github.io/react/downloads.html (See bottom)
      __DEV__: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
      inject: "body"
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "commons",
      filename: "assets/commons.js",
      minChunks: 2
    })
  ],
  devtool: "eval-source-map"
};
