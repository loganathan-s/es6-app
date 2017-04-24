const webpack = require('webpack'); //commonjs doesnt use import, so we're using require to import modul
const nodeEnv = process.env.NODE_ENV || 'production';

module.exports = {
    devtool: 'source-map',
    entry: {
        filename: './app.js'
    },
  output: {
      filename: '_bundle/bundle.js' //location where bundled files will go
  },
module: {
    // loaders -> specify file type to process , ex: bable loader will process only js file, and it converts ES6 to ES5.
    loaders: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader', // loader name
            query: {
                presets: ['es2015-native-modules']
            }
        }
    ]
},
   plugins: [
    //uglify js
       new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: { comments: false },
      sourceMap: true
    }),

        //env plugin
       new webpack.DefinePlugin({
            'process.env': {NODE_ENV: JSON.stringify(nodeEnv)}
        })
    ]
}