const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            ['env', { targets: { browsers: ['last 2 versions'] } }]
          ]
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract([
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ])
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({ 
      filename: 'style.css',
      allChunks: true,
    }),
  ],
};