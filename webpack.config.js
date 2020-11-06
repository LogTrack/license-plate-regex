var path = require('path');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'var',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 5000,
    hot: true,
  }
};
