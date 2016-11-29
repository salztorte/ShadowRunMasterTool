/* eslint object-shorthand: 0
 import/no-extraneous-dependencies: 0 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const webpack = require('webpack');

const output = outputDir => ({
    path: path.resolve(outputDir),
    filename: '[name].js',
    publicPath: './',
});

const loaders = {
    bable: {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
    },
    jpg: {
        test: /\.jpg$/,
        loader: 'file-loader?mimetype=image/jpg',
    },
    sass: {
        test: /\.scss$/,
        loader: 'style!css!sass?outputStyle=compressed',
    },
    svg: {
        test: /\.svg$/,
        loader: 'babel?presets[]=es2015,presets[]=react!svg-react',
    },
};
const plugins = {
    wbpDev: fileName => {
        const name = fileName || './index.html';
        return new HtmlWebpackPlugin({
            filename: name,
            inject: false,
            template: path.resolve('src', name),
        });
    },
    provide: provide => new webpack.ProvidePlugin(provide),
    copyCss: () => new CopyWebpackPlugin([{
        context: './node_modules/onsenui/',
        from: './css/**/*',
    }], {
        ignore: [
            '*.txt',
            { glob: '**/*', dot: true },
        ],
        copyUnmodified: true,
    }),
};

module.exports = {
    loaders,
    plugins,
    output,
};
