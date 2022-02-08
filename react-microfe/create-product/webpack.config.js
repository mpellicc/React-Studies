const WebpackHtmlPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const deps = require('./package.json').dependencies;

module.exports = {
    mode: 'development',
    devServer: {
        port: 8081,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx|ts)$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
    },
    plugins: [
        new WebpackHtmlPlugin({
            template: './public/index.html'
        }),
        new ModuleFederationPlugin({
            name: 'createProduct',
            filename: 'remoteEntry.js',
            exposes: {
                './CreateProductIndex': './src/index',
            },
            shared: {
                ...deps,
                react: {singleton: true, eager: true, requiredVersion: deps.react},
                'react-dom': {
                    singleton: true,
                    eager: true,
                    requiredVersion: deps['react-dom'],
                },
            },
        })
    ],
};