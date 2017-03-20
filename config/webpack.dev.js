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
  devtool: 'cheap-module-eval-source-map',

  /**
   * Options affecting the output of the compilation.
   *
   * See: https://webpack.js.org/configuration/output/
   */
  output: {
    path: helpers.root('dist'),
    filename: '[name].bundle.js',
    sourceMapFilename: '[file].map',
    chunkFilename: '[id].chunk.js'
  },

  /*
   * Options affecting the normal modules.
   *
   * See: https://webpack.js.org/configuration/module/
   */
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'tslint-loader',
            options: {
              configFile: 'tslint.json'
            }
          }
        ]
      }
    ]
  },

  /*
   * Add additional plugins to the compiler.
   *
   * See: https://webpack.js.org/configuration/plugins/
   */
  plugins: [
    new ExtractTextPlugin('[name].bundle.css'),

    // NOTE: when adding more properties, make sure you include them in custom-typings.d.ts
    new webpack.DefinePlugin({
      APP_ENV: JSON.stringify('development')
    })
  ],

  /**
   * Webpack Development Server configuration
   * Description: The webpack-dev-server is a little node.js Express server.
   * The server emits information about the compilation state to the client,
   * which reacts to those events.
   *
   * See: https://webpack.js.org/configuration/dev-server/
   */
  devServer: {
    contentBase: helpers.root('src'),
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000,
    historyApiFallback: true,
    stats: 'minimal',
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
});
