const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const aliases = require('./src/aliases');

module.exports = {
  devServer: {
    historyApiFallback: true,
  },
  entry: { index: path.resolve(__dirname, 'src', 'index.js') },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
      },
    ],
  },

  output: {
    path: path.resolve(__dirname, 'build'),
  },

  mode: 'development',

  optimization: {
    splitChunks: { chunks: 'all' },
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      publicPath: '/',
    }),
    new Dotenv(),
  ],

  resolve: {
    alias: aliases,
    extensions: ['.js', '.jsx'],
  },
};
