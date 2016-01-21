var path = require('path');
var webpack = require('webpack');

module.exports = {

    entry: path.resolve(__dirname, 'src/js/client.js'),

    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
};
