const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

// Define two different css extractors
const extractBundle = new ExtractTextPlugin('[name]-[hash].css')
const extractVendor = new ExtractTextPlugin('vendor-[hash].css')

module.exports = {
  entry: {
    main: [
      path.join(__dirname, './src/client/index')
    ]
  },
  output: {
    path: path.join(__dirname, 'dist', 'public'),
    filename: '[name]-[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js'
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
        loader: extractVendor.extract({
          fallback: 'style-loader?sourceMap',
          use: 'css-loader?sourceMap'
        })
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: extractBundle.extract({
          fallback: 'style-loader?sourceMap',
          use: 'css-loader?sourceMap'
        })
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    extractVendor,
    extractBundle,
    new CleanWebpackPlugin(path.join(__dirname, 'dist', 'public'), { verbose: false }),
    new webpack.optimize.UglifyJsPlugin({ sourceMap: true }),
    new webpack.EnvironmentPlugin([
      'NODE_ENV',
      'API'
    ]),
    new HtmlWebpackPlugin({ template: path.join(__dirname, 'src', 'client', 'index.ejs') })
  ]
}
