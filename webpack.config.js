const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'app/Resources/assets/js/app.js')
    },
    output: {
        path: path.resolve(__dirname, 'web/builds'),
        filename: 'bundle.js',
        publicPath: '/builds/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "sass-loader" }
                ]
            },
            {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
                use: "url-loader"
            },
            {
                test: /jquery/,
                use: [
                    { loader: 'expose-loader', options: '$' },
                    { loader: 'expose-loader', options: 'jQuery' }
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            hljs: path.resolve(__dirname, 'app/Resources/assets/js/highlight.pack.js')
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ],
    resolve: {
        alias: {
            fonts: path.resolve(__dirname, 'web/fonts'),
            jquery: path.resolve(__dirname, 'app/Resources/assets/js/jquery-2.1.4.min.js'),
            moment: path.resolve(__dirname, 'app/Resources/assets/js/moment.min.js')
        }
    },
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        hot: true,
        contentBase: './web/'
    }
};
