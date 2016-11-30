/* eslint object-shorthand: 0
 import/no-extraneous-dependencies: 0 */
const config = require('./config.js');
const webpack = require('webpack');
const devConf = require('./webpack.dev.config');

const plugins = config.plugins;
const output = config.output;

module.exports = {
    entry: devConf.entry,
    output: output('build'),
    resolve: devConf.resolve,
    plugins: [
        plugins.wbpDev(),
        plugins.uglify(),
        plugins.setEnv(),
    ],
    module: {
        loaders: devConf.module.loaders,
    },
    sassLoader: devConf.sassLoader,
};


//module.exports = {
//    entry: devConf.entry,
//    output: devConf.output,
//    resolve: devConf.resolve,
//    plugins: [
//        plugins.wbpDev(),
//        plugins.uglify(),
//    ],
//    module: devConf.module,
//    sassLoader: module.sassLoader,
//};
