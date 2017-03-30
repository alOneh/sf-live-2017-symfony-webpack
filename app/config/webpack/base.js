'use strict';

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const rootDir = path.resolve(__dirname, '../../../');
const publicPath = '/builds/';


module.exports = function() {
    return {
        entry: {
            app: path.resolve(rootDir, 'app/Resources/assets/js/app.js'),
            vendor: [
                'jquery',
                'moment',
                'highlightjs',
                'bootstrap',
            ]
        },
        output: {
            path: path.join(rootDir, 'web/builds'),
            filename: '[name].js',
            publicPath: publicPath
        },
        devtool: 'hidden-source-map',
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules)/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' })
                },
                {
                    test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
                    use: "file-loader"
                },
                {
                    test: /jquery/,
                    use: [
                        { loader: 'expose-loader?$' },
                        { loader: 'expose-loader?jQuery' }
                    ]
                }
            ]
        },
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "window.jQuery": "jquery",
                hljs: path.resolve(__dirname, rootDir, 'app/Resources/assets/js/highlight.pack.js')
            }),
            new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
            new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' }),
        ],
        resolve: {
            alias: {
                fonts: path.resolve(__dirname, rootDir, 'web/fonts'),
                jquery: path.resolve(__dirname, rootDir, 'app/Resources/assets/js/jquery-2.1.4.min.js'),
                moment: path.resolve(__dirname, rootDir, 'app/Resources/assets/js/moment.min.js'),
                highlightjs: path.resolve(__dirname, rootDir, 'app/Resources/assets/js/highlight.pack.js'),
                bootstrap: path.resolve(__dirname, rootDir, 'app/Resources/assets/js/bootstrap-3.3.4.min.js')
            }
        },
    };
};
