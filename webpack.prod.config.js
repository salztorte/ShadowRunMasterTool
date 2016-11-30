/* eslint object-shorthand: 0
 import/no-extraneous-dependencies: 0 */

const config = require('./webpack.config');
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
        plugins.setEnvProd(),
    ],
    module: {
        loaders: devConf.module.loaders,
    },
    sassLoader: devConf.sassLoader,
};
