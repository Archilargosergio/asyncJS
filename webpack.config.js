const path = require('path');
const htmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entries: './src/index.js',
    output: {
        path: path.resolve(__dirname, '/dist'),
        filename: 'index_bundle.js',
    }, 
    mode: 'development',
    resolve: {
        extensions: ['js'|'jsx'],
    },
    module: {
        rules: [
            {
                test:/\.(js|jsx)$/,
                exclude: '/node_modules/',
                use: [
                    {
                        loader: 'babel-loader',
                    }
                ]
            },
        ]
    },
    plugin: [
        new htmlWebPackPlugin({
            template: './public/index.html',
        })
    ]
}   