var webpack = require('webpack');
var path = require('path');

const common = require('./webpack.common.js');

module.exports = {
	...common,
	mode: "production",
	plugins: [
		new webpack.DefinePlugin({
			__SITE_NAME: JSON.stringify("Force Of Habit"), // DefinePlugin doesn't like strings.
			__API_HOST: JSON.stringify("https://forceofhab.it/")
		})
	]//,
	// devtool: 'source-map'
}
