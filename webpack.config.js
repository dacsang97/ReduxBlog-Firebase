module.exports = {
	devtool : 'eval-source-map',
	entry : __dirname + '/app/index.js',
	output : {
		path : __dirname + '/public',
		filename : 'bundle.js'
	},
	devServer : {
		contentBase : './public',
		color : true,
		inline : true,
		historyApiFallback : true
	},
	module : {
		loaders : [
			{
				test : /\.js$/,
				loader : 'babel',
				exclude : /node_module/,
				query : {
					presets : ['react', 'es2015']
				}
			}
		]
	}
}
