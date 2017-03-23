const path = require('path');

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
            }
        ]
    }
};