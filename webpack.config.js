const webpack = require('webpack');

module.exports = {
    entry: {
        scripts: "./scripts/entry.js"
    },
    output: {
        path: 'public/scripts',
        filename: "[name].js"
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }]
    },
    externals: [
        {
            'react': {
                root: 'React',
                commonjs2: 'react',
                commonjs: 'react',
                amd: 'react'
            }
        }
    ],
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                // This has effect on the react lib size
                "NODE_ENV": JSON.stringify("production")
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ]
};