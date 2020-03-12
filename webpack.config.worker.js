const path = require("path");

module.exports = {
  entry: {
    worker: path.join(__dirname, "./worker/index.ts")
  },

  output: {
    path: path.join(__dirname, "./public")
  },

  mode: process.env.NODE_ENV || "development",

  watchOptions: {
    ignored: /node_modules|dist|\.js/g
  },

  devtool: "cheap-module-eval-source-map",

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    plugins: []
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      }
    ]
  }
};
