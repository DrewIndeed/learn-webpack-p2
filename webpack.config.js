const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    customOutputName: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
};
