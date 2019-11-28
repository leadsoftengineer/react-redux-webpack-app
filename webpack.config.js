var webpack = require('webpack');

module.exports = {
	entry:"./src/main.js",
	output: {
		path: __dirname + '/public/build/',
		publicPath: "build/",
		filename: "bundle.js"

	},
	module: {
		rules: [
		    {
                test: /\.js$/,
                 exclude: [/node_modules/,/public/],
                use: "babel-loader"               
		    },
		

            {
                test: /\.css$/,
                use: [
                'style-loader',
                 { loader: 'css-loader', options: { importLoaders: 1 } },
                 {loader:'postcss-loader', options:{options: {},}}
                 ],
                exclude: [/node_modules/, /public/]
            },

		    {
                test: /\.gif$/,
                use: "url-loader?limit=10000&mimetype=image/gif"                
		    },
		    {
                test: /\.jpg$/,
                use: "url-loader?limit=10000&mimetype=image/jpg"                
		    },
		    {
                test: /\.png$/,
                use: "url-loader?limit=10000&mimetype=image/png"                
		    },
		    {
                test: /\.svg$/,
                use: "url-loader?limit=10000&mimetype=image/svg+xml"                
		    },
		     {
                test: /\.jsx$/,
                 exclude: [/node_modules/,/public/] ,
                use: "babel-loader"                        
		    },
		     {
                test: /\.json$/,
                use: "json-loader"
             }
		]
	}
}