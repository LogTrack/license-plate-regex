const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 5000,
    hot: true,
  },
  module: {
    rules: []
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: './src/index.html' }
      ]
    })
  ]
};
