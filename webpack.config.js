const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
let FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
	entry: {
		vendor: './src/vendor.js',
		app: './src/app.js'
	},

	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: 'http://localhost:8080/',
		filename: '[name].js',
		chunkFilename: '[id].[chunkhash].js'
	},

	resolve: {
		extensions: ['.js', '.vue'],
		modules: [
			'node_modules',
		],
		alias: {
			'vue$': 'vue/dist/vue.common.js'
		}
	},

	devtool: 'source-map',

	// What information should be printed to the console
	stats: {
		colors: true,
		reasons: true,
		hash: false,
		version: true,
		timings: true,
		chunks: false,
		chunkModules: false,
		children: false,
		cached: true,
		cachedAssets: false,
		modules: true,
	},
	performance: {
		hints: false
	},
	devServer: {
		stats: {
			assets: true,
			colors: true,
			reasons: false,
			hash: false,
			version: true,
			timings: true,
			chunks: true,
			chunkModules: false,
			chunkOrigins: false,
			children: true,
			cached: true,
			cachedAssets: true,
			errorDetails: false,
			modules: false,
			source: true
		},
		host: '0.0.0.0',
		port: 8080,
		open: false,
		hot: true,
		inline: true,
		publicPath: 'http://localhost:8080/',
	},


	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: ['app', 'vendor']
		}),

		new webpack.ProvidePlugin({
			'Vue': 'vue',
		}),

		// Plugin for webpack 2
		new webpack.LoaderOptionsPlugin({
			debug: true,
			minimize: false,
			options: {
				context: path.resolve(__dirname, '.'),
				output: {
					path: path.resolve(__dirname, './dist'),
				},
			},
		}),

		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),

		new FaviconsWebpackPlugin({
			// Your source logo
			logo: './src/assets/styles/styleguide/bm-logo/images/bm-icon.png',
			// The prefix for all image files (might be a folder or a name)
			prefix: 'icons-[hash]/',
			// Emit all stats of the generated icons
			emitStats: false,
			// Generate a cache file with control hashes and
			// don't rebuild the favicons until those hashes change
			persistentCache: true,
			// Inject the html into the html-webpack-plugin
			inject: true,
			// favicon background color (see https://github.com/haydenbleasel/favicons#usage)
			background: '#fff',
			// favicon app title (see https://github.com/haydenbleasel/favicons#usage)
			title: 'Be-Mobile',

			// which icons should be generated (see https://github.com/haydenbleasel/favicons#usage)
			icons: {
				android: true,
				appleIcon: true,
				appleStartup: true,
				coast: false,
				favicons: true,
				firefox: true,
				opengraph: false,
				twitter: false,
				yandex: false,
				windows: false
			}
		}),

		// Hot Module Reloading
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],

	module: {
		rules: [
			// {
			// 	enforce: 'pre',
			// 	test: /\.vue$/,
			// 	loader: 'eslint-loader',
			// 	include: path.resolve(__dirname, './src'),
			// 	exclude: /node_modules/
			// },
			// {
			// 	enforce: 'pre',
			// 	test: /\.js$/,
			// 	loader: 'eslint-loader',
			// 	include: path.resolve(__dirname, './src'),
			// 	exclude: /node_modules/
			// },
			{
				test: /\.jsx?$/,
				include: [
					path.resolve(__dirname, './src')
				],
				loader: 'babel-loader'
			},
			{
				test: /\.html$/,
				loader: 'raw-loader'
			},
			{
				test: /\.less$/,
				loader: "style-loader!css-loader!less-loader"
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.(png|jpg|jpeg|svg|woff|woff2|gif)$/,
				loader: 'url-loader',
				query: {
					limit: 100,
					name: "[path][name].[ext]",
				}
			},
			{
				test: /\.(eot|ttf|wav|mp3)$/,
				loader: 'file-loader',
			},
		],
	},
};
