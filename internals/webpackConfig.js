"use strict";

const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');


const getCssLoader = (mode, options) => {

	if(mode == 'dev') {

		return ExtractTextPlugin.extract({
			fallback: "style-loader",
			use: [
				{
					loader: 'css-loader',
					options: {
						modules: true,
						localIdentName: '[local]___[hash]'
					}
				},
				'sass-loader'
			]
		});
		
	} else {
		return ExtractTextPlugin.extract({
			fallback: "style-loader",
			use: [
				{
					loader: 'css-loader',
					options: {
						modules: true
					}
				},
				'sass-loader'
			]
		});
	}
};

const getPlugins = (mode, options) => {

	var plugins = [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(process.env.NODE_ENV)
			}
		}),

		new ExtractTextPlugin({
			filename: '[name].css',
			allChunks: false
		}),

		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			minChunks: Infinity
		})
	];

	if(mode != 'dev') {
		plugins = plugins.concat([
			new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
		]);
	} 

	return plugins;
};




module.exports = (mode, options) => {
	return {
		context: path.resolve(__dirname, './app'),
		entry: [
			path.resolve('app', 'main.js'),
			path.resolve('app', 'containers', 'index', 'index.js')
		],
		output: {
			path: path.resolve(__dirname, '../build'),
			filename: '[name].bundle.js'
		},
		module: {
			loaders: [
				{
					test: /\.js$/,
					exclude: [/node_modules/],
					use: [{
						loader: 'babel-loader',
						options: { presets: ['es2015', 'react', 'stage-0'] }
					}]
				},
				{
					test: /\.(scss|css)$/,
					exclude: [/node_modules/],
					use: getCssLoader(mode, options)
				}
			]
		},

		plugins: getPlugins(mode, options),
		resolve: {
			modules: [
				path.join(__dirname, "app"),
				 "node_modules"
			]
		}
	}
};



