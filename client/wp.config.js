/* eslint-disable import/no-extraneous-dependencies */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const ROOT_PATH = path.resolve(__dirname)
const DIST_PATH = path.resolve(ROOT_PATH, './dist')

module.exports = {
  devtool: 'source-map',
  entry: {
    app: './src/app.tsx'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
    ]
  },
  output: {
    path: DIST_PATH,
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new MiniCssExtractPlugin()
  ],
  resolve: {
    extensions: ['.js', '.scss', '.ts', '.tsx']
  }
}
