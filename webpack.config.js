const webpack = require('webpack');
const path = require('path');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            // url-loader - копирует файл и возвращает url
            // Если длина файла меньше limit, преобразует файл в строку Data Url 
            // и возвращает ее в качестве экспорта модуля, т е, включается в сборку
            // Иначе - файл копируется отдельно
            {
                test: /\.png$/,
                loader: 'url-loader?limit=100000'
            },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]"
            },
            {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]"
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=application/octet-stream&name=fonts/[name].[ext]"
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=image/svg+xml&name=fonts/[name].[ext]"
            }
        ]
    },
    resolve: {
        // from "file" - по очереди разрешит все расширения из массива
        extensions: ['.js', '.jsx', '*'],
        alias: {
            src: path.resolve(__dirname, "src"),
            Core: path.resolve(__dirname, "src/Core"),
            Pages: path.resolve(__dirname, "src/Pages"),
            components: path.resolve(__dirname, "src/components"),
            Auth: path.resolve(__dirname, "src/components/Auth"),
        },
    },
    devServer: {
        contentBase: "./dist",
        port: 3001,
        hot: true,
        historyApiFallback: true,
        progress: true,
    },
    devtool: devMode ? 'eval' : "",
    mode: devMode ? 'development' : 'production',
    // performance позволяют управлять тем, как webpack уведомляет об активах и точках входа,
    // которые превышают определенный лимит файлов. По умолчанию 250 КБ
    performance: {
        // error и warning
        hints: !devMode ? "warning" : false
    },
};