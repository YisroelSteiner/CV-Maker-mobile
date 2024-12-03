'use strict'

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
mode: 'development',
entry: {
  main: path.resolve(__dirname, 'src/index.js'),
},
output: {
  path: path.resolve(__dirname, 'dist'),
  filename: '[name].bundle[contenthash].js',
  clean: true,
  assetModuleFilename: '[name][ext]'
},
resolve: {
  extensions: ['.js', '.jsx'],
},
devServer: {
  static: {
    directory: path.resolve(__dirname, 'dist')
  },
  port: 1833,
  open: true,
  hot: true,
  compress: true,
  historyApiFallback: true
},
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          }
        }
      },
      {
        test: /\.(css)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Steiner's Free Express CV Maker",
      filename: "index.html",
      template: "./src/template.html"
    })
  ]
};