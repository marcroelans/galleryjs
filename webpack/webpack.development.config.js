var path = require('path');

module.exports = {
  mode: 'development',
  entry:  './src/index.js',
  output: {
    library: 'Gallery',
    libraryTarget: "umd",
    filename: 'gallery-dev.js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
