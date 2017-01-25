var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    main: [
      'webpack-dev-server/client?' + process.env.DEV_BASE + ':' + process.env.DEV_PORT,
      'webpack/hot/only-dev-server',
      'react-hot-loader/patch',
      './client/index'
    ]
  },
  output: {
    path: path.join(process.cwd(), '/dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.join(process.cwd(), '/client'),
      'node_modules'
    ]
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
          'style-loader',
          'css-loader'
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
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    port: parseInt(process.env.DEV_PORT)
  },
  performance: {
    hints: false
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        DEV_BASE: JSON.stringify(process.env.DEV_BASE),
        DEV_PORT: JSON.stringify(process.env.DEV_PORT),
        DEV_API: JSON.stringify(process.env.DEV_API),
        PROD_API: JSON.stringify(process.env.PROD_API)
      }
    }),
    new HtmlWebpackPlugin({ template: 'client/index.ejs' })
  ]
}
