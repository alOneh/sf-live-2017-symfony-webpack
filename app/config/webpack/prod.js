'use strict';

const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const commonConfig = require('./base.js');

module.exports = function() {
    return webpackMerge(commonConfig(), {
        output: {
            filename: '[name].[chunkhash].js'
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify('production')
                }
            }),
            new webpack.optimize.UglifyJsPlugin({
                beautify: false,
                mangle: {
                    screw_ie8: true,
                    keep_fnames: true
                },
                compress: {
                    screw_ie8: true,
                    warnings: false
                },
                comments: false
            }),
            new ExtractTextPlugin('[name].[chunkhash].css'),
            new ManifestPlugin({
                fileName: 'manifest.json',
                basePath: 'builds/'
            })
        ]
    })
};
