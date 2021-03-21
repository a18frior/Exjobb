const Path = require('path');

module.exports = {
	mode: 'development',
	entry: {
		'app': Path.resolve('src/App.ts')
	},
    devtool: 'inline-source-map',
    resolve: {
      // Add `.ts` and `.tsx` as a resolvable extension.
      extensions: [".ts", ".tsx", ".js"]
    },
	module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/
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