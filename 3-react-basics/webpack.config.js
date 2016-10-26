const webpack = require("webpack");

module.exports = {
    entry: {
        main: './src/index'
    },
    output: {
        path: './dist',
        publicPath: '/dist',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.css$/,
                loader: 'style'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    // plugins: [
    //     new webpack.ProvidePlugin({
    //         'Promise': 'bluebird'
    //     })
    // ]
}
