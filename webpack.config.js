const path = require('path');

module.exports = () => {
  return {
    entry: './app/index.js',
    output: {
      path: path.join(__dirname, 'public/assets/'),
      filename: 'bundle.js'
    },
    module: {
      rules:[
        {
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
        }
      ]
    },
    devtool: 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      publicPath: '/assets/',
      port: 3000
    }
  }
}
