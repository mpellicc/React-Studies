const WebpackHtmlPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
module.exports = {
    mode: 'development',
    devServer: {
        port:8080
    },
    plugins: [
        new WebpackHtmlPlugin({
            template: './public/index.html'
        }),
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                microFrontEnd1: 'microFrontEnd1@http://localhost:8081/remoteEntry.js',
                microFrontEnd2: 'microFrontEnd2@http://localhost:8082/remoteEntry.js',
                reactMicroFrontEnd3: 'reactMicroFrontEnd3@http://localhost:8083/remoteEntry.js',
            },
        }),
    ]
};