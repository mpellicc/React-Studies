const WebpackHtmlPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
module.exports = {
    mode: 'development',
    devServer: {
        port: 8083,
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
        name: 'productDetails',
        filename: 'remoteEntry.js',
        exposes: {
          './ProductDetailsIndex': './src/index',
        }
      })
    ],
};