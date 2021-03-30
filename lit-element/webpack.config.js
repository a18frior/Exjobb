
const Path = require('path');

module.exports = {
	mode: 'development',
	entry: Path.resolve('src/App.ts'),
    devtool: 'inline-source-map',
    resolve: {
      extensions: [".ts", ".js", ".html"]
    },
	module: {
		rules: [
			{
			  test: /\.(ts)$/,
			  exclude: /node_modules/,
			  loader: 'ts-loader'
			}
			
		  ]
	},

	output: {
		path: Path.resolve('webapp'),
		filename: 'app.js',
		publicPath: ''
	},

	devServer: {
		contentBase: Path.resolve('webapp'),
		host: 'localhost',
		port: 8080,
		disableHostCheck: true
	}
	
};
