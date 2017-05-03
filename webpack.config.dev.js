const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    main: [
      './src/client/index'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist', 'public')
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules']
  },
  module: {
    rules: [
      {
        test: /\.js$|\.jsx$/,
        exclude: /node_modules\/(?!(map-obj|camelcase)\/).*/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        loaders: [
          'style-loader?sourceMap',
          'css-loader?sourceMap'
        ]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: [
          'style-loader?sourceMap',
          'css-loader?sourceMap'
        ]
      }
    ]
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    historyApiFallback: true,
    port: process.env.DEV_PORT
  },
  performance: {
    hints: false
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.EnvironmentPlugin([
      'NODE_ENV',
      'DEV_BASE',
      'DEV_PORT',
      'API'
    ]),
    new HtmlWebpackPlugin({ template: path.join(__dirname, 'src', 'client', 'index.ejs') })
  ]
}
