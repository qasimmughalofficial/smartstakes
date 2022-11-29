/* eslint-disable */
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    port: 5001, //default 8080
    open: true,
    hot: true,
    historyApiFallback: true
  },
  mode: 'development'
});
