const Path = require('path');

module.exports = {
	mode: 'development',
	entry: {
		'app': Path.resolve('src/App.jsx')
	},
    devtool: 'inline-source-map',
    resolve: {
      extensions: [".jsx", ".js"]
    },
	module: {
		rules: [
			{
			  test: /\.(js|jsx)$/,
			  exclude: /node_modules/,
			  loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		  ]
	},

	output: {
		path: Path.resolve('webapp'),
		filename: '[name].js',
		publicPath: ''
	},

	devServer: {
		contentBase: Path.resolve('webapp'),
		host: 'localhost',
		port: 8080,
		disableHostCheck: true
	}
};