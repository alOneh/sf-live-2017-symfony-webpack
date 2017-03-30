const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpackMerge = require('webpack-merge');
const webpack = require('webpack');

const commonConfig = require('./base.js');

module.exports = function () {
    return webpackMerge(commonConfig(), {
        devtool: 'cheap-module-source-map',
        devServer: {
            hot: true,
            contentBase: './web/'
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new ExtractTextPlugin('[name].css'),
        ]
    })
};
