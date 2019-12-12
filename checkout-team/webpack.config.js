const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const NodemonPlugin = require('nodemon-webpack-plugin');

const server = {
  target: 'node',
  entry: {
		main: [
			'./src/server.js',
		]
	},
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'server.js',
  },
  module: {
    rules: [
      {
        test: /\.js|\.jsx$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: 'vue-loader'
      }
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new NodemonPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

const client = {
  target: 'web',
  entry: {
		main: [
			'./src/client.js',
		]
	},
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'client.js',
  },
  module: {
    rules: [
      {
        test: /\.js|\.jsx$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: 'vue-loader'
      }
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

module.exports = [server, client];
