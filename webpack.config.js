const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'my-bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,       
        use: ["babel-loader"],
      },      
    ],
  },

    devServer: {
      port: 7777,
  },
};