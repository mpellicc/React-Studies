const WebpackHtmlPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
module.exports = {
    mode: 'development',
    devServer: {
        port:8083
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
    
                exclude: /node_modules/,
    
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react'
                    ],
                },
            },
        ],
    },
    plugins: [
        new WebpackHtmlPlugin({
            template: './public/index.html'
        }),
        new ModuleFederationPlugin({
            name: 'reactMicroFrontEnd3',
            filename: 'remoteEntry.js',
            exposes: {
                './ReactMicroFrontEnd3Index': './src/index',
            }
        })
    ],
};