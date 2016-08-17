var webpack = require('webpack');
var config = {
	devtool : 'eval-source-map',
	entry : __dirname + '/app/index.js',
	output : {
		path : __dirname + '/public',
		filename : 'bundle.js'
	},
	plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
	devServer : {
		contentBase : './public',
		color : true,
		inline : true,
		historyApiFallback : true,
		hot : true
	},
	module : {
		loaders : [
			{test : /\.js$/, loader : 'babel', exclude : /node_module/},
			{test : /\.css$/, loader : 'style!css?modules'},
			{test : /\.scss$/, loader : 'style!css?modules!sass'}
		]
	}
}

if (process.args.NODE_ENV === 'production') {
	config.devtool = false;
	config.plugins = [
		new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({comments: false}),
        new webpack.DefinePlugin({
            'process.env': {NODE_ENV: JSON.stringify('production')}
        })
	]
}

module.exports = config;
