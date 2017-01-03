/* eslint object-shorthand: 0
 import/no-extraneous-dependencies: 0 */
const webpack = require('webpack');
//noinspection CodeAssistanceForCoreModules
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const CopyWebpackPlugin = require('copy-webpack-plugin');

const output = outputDir => ({
    path: path.resolve(outputDir),
    filename: '[name].js',
    publicPath: './',
});

const resolve = {
    extensions: ['.js', ',jsx', '.scss', '.css'],
    modules: ['node_modules'],
};

const loaders = {
    bable: {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
    },
    jpg: {
        test: /\.jpg$/,
        loader: 'file-loader',
        query: {
            mimetype: 'image/jpg',
        },
    },
    sass: {
        test: /\.scss?$/,
        use: [
            'style-loader',
            'css-loader',
            {
                loader: 'sass-loader',
                query: {
                    includePaths: ['./node_modules'],
                },
            },
        ],
    },
    svg: {
        test: /\.svg$/,
        loader: 'babel-loader!svg-react-loader',
    },
};
const plugins = {
    htmlWpPlugin: fileName => {
        const name = fileName || './index.html';
        return new HtmlWebpackPlugin({
            filename: name,
            inject: false,
            template: path.resolve('src', name),
        });
    },
    uglify: () => new webpack.optimize.UglifyJsPlugin({
        compress: true,
        comments: false,
        sourceMap: false,
    }),
    setEnvProd: () => new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production'),
        },
    }),
};

module.exports = {
    loaders,
    plugins,
    output,
    resolve,
};
