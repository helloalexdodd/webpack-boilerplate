const path = require('path');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.config.js');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = Merge(CommonConfig, {
	output: {
		path: path.join(__dirname, '../dev'),
		filename: 'bundle.js',
	},
	plugins: [
		new MiniCssExtractPlugin({ filename: 'styles.css' }),
		new HtmlPlugin({
			template: './public/index.html',
			title: 'A Fresh Webpack Boilerplate',
		}),
	],
});
