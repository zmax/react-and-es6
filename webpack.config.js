/*
 webpack 與 react.js 的設定可參考這篇
 https://www.twilio.com/blog/2015/08/setting-up-react-for-es6-with-webpack-and-babel-2.html
*/

var path = require('path');
var webpack = require('webpack');

module.exports = {
    // devtool: 'source-map',
    // devtool: 'cheap-module-eval-source-map',
    // devtool: 'cheap-module-source-map',
    entry: path.resolve(__dirname, 'src/app'),
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react', 'stage-0', 'stage-1'],
                    plugins: ["transform-decorators-legacy"]
                }
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json', '.coffee'],
        alias: {
            components: __dirname + '/src/components',
        }
    }
};
