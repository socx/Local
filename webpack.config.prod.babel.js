import { DefinePlugin, optimize } from 'webpack';
import baseConfig from './webpack.config.babel.js';
import validate from 'webpack-validator';

const config = {
    ...baseConfig,
    plugins: [
        ...baseConfig.plugins,
        new DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new optimize.DedupePlugin()
    ],
    debug: false
}

export default validate(config);
