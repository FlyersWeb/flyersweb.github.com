"use strict";

const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill', './src/app.jsx'],
  devtool: '#source-map',
  output: {
    path: './bin',
    publicPath: '/assets/',
    filename: 'app.bundle.js'
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: './node_modules/tingle.js/dist/tingle.min.css', to: 'tingle.min.css'},
      { from: './node_modules/tingle.js/dist/tingle.min.js', to: 'tingle.min.js'}
    ])
  ],
  module: {
    loaders: [
      {
        test: /\.js|\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: "file-loader?name=img/[hash:6].[ext]"
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  node: {
    fs: "empty"
  }
};
