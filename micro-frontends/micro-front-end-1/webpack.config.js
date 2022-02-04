const WebpackHtmlPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
module.exports = {
    mode: 'development',
    devServer: {
        port:8081
    },
    plugins: [
        new WebpackHtmlPlugin({
            template: './public/index.html'
        }),
        new ModuleFederationPlugin({
            name: 'microFrontEnd1',
            filename: 'remoteEntry.js',
            exposes: {
                './MicroFrontEnd1Index': './src/index',
            }
        })
    ]
};