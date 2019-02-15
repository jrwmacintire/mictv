const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'MicTV'
        })
    ],
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                { loader: "style-loader" },
                { loader: "css-loader" },
                {
                    loader: "sass-loader",
                    options: {
                        includePaths: ["./styles/"]
                    }
                }
            ]
        },
        {
            test: /\.(png|jpg)$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: "./images/[hash].[ext]"
                }
            }
        }]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    }
};
