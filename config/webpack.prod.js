const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');

/**
 * Webpack Plugins
 */
const ExtractTextPlugin = require('extract-text-webpack-plugin');

/**
 * Webpack configuration
 */
module.exports = webpackMerge(commonConfig, {
  /**
   * Developer tool to enhance debugging
   *
   * See: https://webpack.js.org/configuration/devtool/
   */
  devtool: 'source-map',

  /**
   * Options affecting the output of the compilation.
   *
   * See: https://webpack.js.org/configuration/output/
   */
  output: {
    path: helpers.root('dist'),
    filename: '[name].[hash].bundle.js',
    sourceMapFilename: '[file].map',
    chunkFilename: '[id].[hash].chunk.js'
  },

  /*
   * Add additional plugins to the compiler.
   *
   * See: https://webpack.js.org/configuration/plugins/
   */
  plugins: [
    new ExtractTextPlugin('[name].[hash].bundle.css'),

    new webpack.optimize.UglifyJsPlugin(),

    // NOTE: when adding more properties make sure you include them in custom-typings.d.ts
    new webpack.DefinePlugin({
      APP_ENV: JSON.stringify('production')
    })
  ]
});
