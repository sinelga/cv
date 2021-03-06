var webpack = require('webpack');

module.exports = {
		entry: {
		    app: [ './src/app.js'],
			vendor: ["react","react-router","react-bootstrap","react-document-meta","firebase","react-star-rating","react-fontawesome"],
		  },
   output: {
     path: __dirname + '/dist/',
     filename: 'cv_deskbundle.js',
     publicPath: '/'
   },
   module: {
     loaders: [
       { test: /\.js$/, loader: 'babel', exclude: [/node_modules/]  }
      ]
   },
   
   plugins: [
             new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.cv_deskbundle.js")
           ]
};