/* eslint object-shorthand: 0
 import/no-extraneous-dependencies: 0 */
const config = require('./webpack.config');

const loaders = config.loaders;
const plugins = config.plugins;
const output = config.output;

module.exports = {
    devtool: 'source-map',
    entry: ['babel-polyfill', './src/main.jsx'],
    output: output('build'),
    resolve: {
        extensions: ['', '.js', ',jsx', '.scss', '.css'],
    },
    plugins: [
        plugins.wbpDev(),
    ],
    module: {
        loaders: [
            loaders.bable,
            loaders.jpg,
            loaders.sass,
            loaders.svg,
        ],
    },
    sassLoader: {
        includePaths: [
            './node_modules',
        ],
    },
};