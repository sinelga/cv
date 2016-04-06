scp juno@104.236.240.215:git/cv/version_desk_react_00/dist/en_US_programming_blog.json .



 git init cv
 
 cd cv/
 git remote add -f origin https://github.com/sinelga/cv.git
 git config core.sparseCheckout true
 echo "version_desk_react_00/" >> .git/info/sparse-checkout
 git pull --depth=1 origin master
 git pull --depth=1 origin master version_desk_react_00 -> origin/version_desk_react_00
 

live-server --no-browser --entry-file=index.html

mkdir version_desk_react_00
cd $_
npm init -y
cd 
git add version_desk_react_00 && git commit -m "Initial dist subtree commit"
git subtree push --prefix version_desk_react_00  origin version_desk_react_00

cd version_desk_react_00

npm install react react-bootstrap react-document-meta react-dom react-router --save


mkdir dist src links

.babelrc
{
  "presets": [
    "es2015",
    "react"
  ],
  "plugins": [
  ]
}

webpack.config.js

var webpack = require('webpack');

module.exports = {
                entry: {
                    app: [ './src/app.js'],
                        vendor: ["react","react-router","react-bootstrap","node-uuid","react-document-meta"],
                  },
   output: {
     path: __dirname + '/dist/',
     filename: 'deskbundle.js',
     publicPath: '/'
   },
   module: {
     loaders: [
       { test: /\.js$/, loader: 'babel', exclude: [/node_modules/]  }
      ]
   },
   
   plugins: [
             new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.deskbundle.js")
           ]
};