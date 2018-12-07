// entry -> output
const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './src/app.js',
    output:{
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module:{
        /*rules:[{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },{
            test: /\.s?css$/,
            use:[
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }/!*,
            {
                test: /\.(svg|ttf|woff|woff2|eot)$/, loader: 'url?limit=5000'
            }*!/],*/
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    plugins:[ 'transform-object-rest-spread' ]
                }
                },
            //include: path.join(__dirname, 'src')
            { test: /\.s?css$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ] },
            {
                test: /\.(svg|ttf|woff|woff2|eot)$/, loader: 'url-loader'
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }
        ]

    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true

    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]
};