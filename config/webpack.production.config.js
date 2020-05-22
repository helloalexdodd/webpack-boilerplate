const path = require('path');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.config.js');
const HtmlPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = Merge(CommonConfig, {
	output: {
		path: path.join(__dirname, '../lib'),
		filename: 'bundle-[hash].js',
	},
	plugins: [
		new MiniCssExtractPlugin({ filename: 'styles-[hash].css' }),
		new CleanWebpackPlugin(),
		new HtmlPlugin({
			template: './public/index.html',
			minify: true,
			hash: true,
			scriptLoading: 'defer',
			title: 'React App',
		}),
	],
	optimization: {
		minimize: true,
	},
});
