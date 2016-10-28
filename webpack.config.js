/* eslint object-shorthand: 0
 import/no-extraneous-dependencies: 0 */
const config = require('./config.js');

const loaders = config.loaders;
const plugins = config.plugins;
const output = config.output;


const provide = {
    React: 'react',
};

module.exports = {
    devtool: 'source-map',
    entry: ['babel-polyfill', './src/main.jsx'],
    output: output('build'),
    plugins: [
        plugins.wbpDev(),
        plugins.provide(provide),
        plugins.copyCss(),
    ],
    module: {
        loaders: [
            loaders.bable(),
        ],
    },
};
