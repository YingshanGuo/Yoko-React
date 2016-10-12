var HtmlWebpakPlugin = require('html-webpack-plugin');
var HtmlWebpakPluginConfig = new HtmlWebpakPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
})


module.exports = {
    entry: [
        './app/index.jsx'
    ],

    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".js", ".jsx"],
    },

    devtool: "eval-source-map",

    output: {
        path: __dirname + '/dist',
        filename: "index_bundle.js"
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/, loader: "file" }

        ]
    },
    plugins: [HtmlWebpakPluginConfig]
}