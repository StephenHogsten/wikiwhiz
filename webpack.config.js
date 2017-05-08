const webpack = require('webpack');
const path = require('path');
const extractTextPlugin = require('extract-text-webpack-plugin');

const APP = path.resolve(__dirname, 'src', 'client');
const PUBLIC = path.resolve(__dirname, 'public');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: path.resolve(APP, 'index.js'),
  output: {
    path: PUBLIC,
    filename: 'bundle.js'
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
      }
    ]
  },
  plugins: [
    new extractTextPlugin({
      filename: 'bundle.css',
      allChunks: true,
    }),
  ],
};