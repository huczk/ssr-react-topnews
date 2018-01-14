const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.js');

const config = {
  entry: ['./src/client/client.js', './src/sass/main.scss'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  }
};

module.exports = merge(baseConfig, config);