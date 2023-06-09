var path = require('path');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
    entry: './src/LeafletMapPlugin',
    output: {
        filename: "openmct-leaflet.js",
        path: path.resolve(__dirname, "dist"),
        library: "LeafletMapPlugin",
        libraryTarget: "umd"
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
	    {
		test: /\.vue$/,
		loader: "vue-loader",
	    },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    },
    resolve: {
        alias: {
            vue: "vue/dist/vue.min.js"
        }
    },
    devtool: "source-map",
    plugins: [
	new VueLoaderPlugin(),
        new UglifyJsPlugin({ sourceMap: true })
    ]
};

