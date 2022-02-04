const WebpackHtmlPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
module.exports = {
    mode: 'development',
    devServer: {
        port: 8080,
    },
    plugins: [
        new WebpackHtmlPlugin({
            template: './public/index.html'
        }),
    ],
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
    }
};