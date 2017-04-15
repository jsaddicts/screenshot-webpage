module.exports = {
	entry: [
		__dirname + '/index.js'
	],
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},{
				test: /\.(less|css)$/,
				loaders: [
					"style-loader",
					"css-loader",
					"less-loader",
				]
			}
		]
	},
	output: {
		path: __dirname + '/static',
		publicPath: '/static',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: __dirname + '/dist',
		// historyApiFallback: true
	}
}