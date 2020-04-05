var webpack = require('webpack');
var path = require('path');

const common = require('./webpack.common.js');

module.exports = {
	...common,
	devtool: 'inline-source-map',
	plugins: [
		new webpack.DefinePlugin({
			__SITE_NAME: JSON.stringify("Force Of Habit"), // DefinePlugin doesn't like strings.
			__API_HOST: JSON.stringify("https://website-backend:8008")
		})
	]
}
