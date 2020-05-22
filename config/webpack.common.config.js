const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
	module: {
		rules: [
			{
				test: /.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
		],
	},
	devServer: {
		hot: false,
		port: 3000,
		open: true,
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new FaviconsWebpackPlugin(`./public/favicon.ico`),
	],
	entry: './src/index.js',
	mode: 'none',
};
