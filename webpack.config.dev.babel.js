import { DefinePlugin } from 'webpack';
import baseConfig from './webpack.config.babel.js';
import validate from 'webpack-validator';

const config = {
    ...baseConfig,
    plugins: [
        ...baseConfig.plugins,
        new DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],
    devServer: {
        inline: true,
        contentBase: 'dist',
        port: 2014
    },
    debug: true,
    devtool: 'source-map'
}

export default validate(config);
