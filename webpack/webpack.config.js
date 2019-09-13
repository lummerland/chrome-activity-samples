const webpack = require("webpack");
const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const src = "../src/";

module.exports = {
    entry: {
        background: path.join(__dirname, src + 'background.js'),
        data: path.join(__dirname, src + 'data.js'),
        dialog: path.join(__dirname, src + 'dialog.js'),
        settings: path.join(__dirname, src + 'settings.js')
    },
    output: {
        path: path.join(__dirname, '../dist/js'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    plugins: [
        // exclude locale files in moment
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new CopyPlugin([
            { from: '.', to: '../' }
        ],
            { context: 'public' }
        ),
    ]
};