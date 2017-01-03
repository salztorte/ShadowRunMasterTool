/* eslint object-shorthand: 0
 import/no-extraneous-dependencies: 0 */
const webpack = require('webpack');
const config = require('./webpack.config');

const plugins = config.plugins;
const loaders = config.loaders;

module.exports = {
    devtool: 'source-map',
    entry: ['babel-polyfill', './src/main.jsx'],
    output: config.output('build'),
    resolve: config.resolve,
    plugins: [
        plugins.htmlWpPlugin(),
    ],
    module: {
        rules: [
            loaders.bable,
            loaders.jpg,
            loaders.sass,
            loaders.svg,
        ],
    },
};
