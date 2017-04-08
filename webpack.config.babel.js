import webpack, { ProvidePlugin } from 'webpack';
import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import validate from 'webpack-validator';

const config = {
    entry: [
        'babel-polyfill',
        './src/Main'
    ],
    resolve: {
        root: resolve('./src'),
        alias: {
            main: resolve('./src/Main'),
            layout: resolve('./src/Main/components/Layout'),
            manage: resolve('./src/Manage'),
            node_modules: resolve('./node_modules')
        },
        extensions: ['','.js', '.jsx']
    },
    output: {
        filename: 'app.[chunkhash].js',
        path: resolve('./dist'),
        publicPath: '/'
    },
    plugins: [
        new ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch',
            'URLSearchParams': 'imports?this=>global!exports?global.URLSearchParams!url-search-params',
        }),
        new HtmlWebpackPlugin({
            template: './src/Main/index.html',
            inject: 'body'
        })
    ],
    module: {
        loaders: [
            { loader: 'babel-loader', test: /\.(js|jsx)$/, exclude: /node_modules/ },
            { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.css$/, loaders: ['style-loader', 'css-loader'] },
            { test: /\.(png|jpg)$/, loader: 'file-loader?name=images/[name].[ext]' },
            { test: /\.woff(\?.*)?$/, loader: "url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff" },
            { test: /\.woff2(\?.*)?$/, loader: "url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff2" },
            { test: /\.ttf(\?.*)?$/, loader: "url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream" },
            { test: /\.eot(\?.*)?$/, loader: "file-loader?prefix=fonts/&name=[path][name].[ext]" },
            { test: /\.svg(\?.*)?$/, loader: "url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml" },
            { test: /jquery\.js$/, loader: 'expose?$' },
            { test: /\.json$/, loader: 'json' }
        ]
    }
};

export default validate(config);
