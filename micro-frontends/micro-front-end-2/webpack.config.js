const WebpackHtmlPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
module.exports = {
    mode: 'development',
    devServer: {
        port:8082
    },
    plugins: [
        new WebpackHtmlPlugin({
            template: './public/index.html'
        }),
        new ModuleFederationPlugin({
            name: 'microFrontEnd2',
            filename: 'remoteEntry.js',
            exposes: {
                './MicroFrontEnd2Index': './src/index',
            }
        })
    ]
};