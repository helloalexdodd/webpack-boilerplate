const path = require('path');
const glob = require('glob');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.config.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const testFiles = glob
	.sync('**/*.test.js')
	.filter(function (element) {
		return (
			element != '../test/bundle.test.js' && !element.includes('node_modules')
		);
	})
	.map(function (element) {
		return './' + element;
	});

module.exports = Merge(CommonConfig, {
	entry: testFiles,
	output: {
		path: path.join(__dirname, '../test'),
		filename: 'bundle.test.js',
	},
	plugins: [new CleanWebpackPlugin()],
	mode: 'none',
});
