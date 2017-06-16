const webpack = require('webpack');
const path = require('path');
const extractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const APP = path.resolve(__dirname, 'src', 'client');
const PUBLIC = path.resolve(__dirname, 'public');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: path.resolve(APP, 'index.js'),
  output: {
    path: PUBLIC,
    filename: '[name].[hash].js',
    publicPath: '/public'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP,
        loader : 'babel-loader'
      },
      {
        test: /\.scss$/,
        loader: extractTextPlugin.extract(['css-loader', 'sass-loader'])
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    new extractTextPlugin({
      filename: 'bundle.[hash].css',
      allChunks: true,
    }),
    new HtmlWebpackPlugin({
      title: 'Kettle App',
      filename: 'generatedIndex.html',
      template: 'src/client/index.ejs',
      files: {
        css: ['public/bundle.[has].css'],
        js: ['public/main.[hash].js']
      }
    })
    //  CAN'T GET THIS TO WORK RIGHT YET
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //   minChunks: function (module) {
    //       // this assumes your vendor imports exist in the node_modules directory
    //       return module.context && module.context.indexOf('node_modules') !== -1;
    //   }
    // })
    //  ONLY DO THIS FOR PRODUCTION
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //       warnings: false
    //   }
    // })
  ],
};