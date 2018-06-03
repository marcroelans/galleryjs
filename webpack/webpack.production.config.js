var path = require('path');

module.exports = {
  mode: 'production',
  entry:  './src/index.js',
  output: {
    library: 'Gallery',
    libraryTarget: "umd",
    filename: 'gallery.js',
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
