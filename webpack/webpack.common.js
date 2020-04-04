var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, '../public');
var APP_DIR = path.resolve(__dirname, '../src');

var config = {
	entry: APP_DIR + '/index.jsx',
	mode: "development",
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
  	},
  	module : {
		rules : [
			{
				test : /\.jsx?/,
				include : APP_DIR,
				loader : 'babel-loader'
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
		  	{
				test: /\.txt$/i,
				use: 'raw-loader',
		  	},
		  	{
				test: /\.md$/i,
				use: 'raw-loader',
		  	}
		]
  	}
};

module.exports = config;
