const webpack = require('webpack');
const helpers = require('./helpers');

/*
 * Webpack Plugins
 */
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

/*
 * Webpack configuration
 */
module.exports = {
  /*
   * The entry point for the bundle
   * Our Angular.js app
   *
   * See: https://webpack.js.org/configuration/entry-context/
   */
  entry: {
    polyfills: './src/polyfills.ts',
    vendor: './src/vendor.ts',
    main: './src/main.ts'
  },

  /*
   * Options affecting the resolving of modules.
   *
   * See: https://webpack.js.org/configuration/resolve/
   */
  resolve: {
    extensions: ['.ts', '.js'],
    modules: [
      helpers.root('src'),
      helpers.root('node_modules')
    ],
    alias: {
      assets: helpers.root('src/assets/'),
      shared: helpers.root('src/app/shared/'),
      core: helpers.root('src/app/core/')
    }
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
          'awesome-typescript-loader',
          'angular2-template-loader',
          'angular-router-loader'
        ]
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      },
      {
        test: /\.html$/,
        use: 'raw-loader',
        exclude: [helpers.root('src/index.html')]
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        }),
        exclude: [helpers.root('src/app')]
      },
      {
        test: /\.css$/,
        use: 'raw-loader',
        include: [helpers.root('src/app')]
      },
      {
        test: /\.(png|jpe?g|gif|ico)$/,
        use: 'file-loader'
      },
      {
        test: /\.(svg|woff2?|ttf|eot)$/,
        use: 'file-loader?name=assets/fonts/[name].[ext]'
      }
    ]
  },

  /*
   * Add additional plugins to the compiler.
   *
   * See: https://webpack.js.org/configuration/plugins/
   */
  plugins: [
    new CheckerPlugin(),

    /**
     * Plugin: ContextReplacementPlugin
     * Description: Provides context to Angular's use of System.import
     *
     * See: https://github.com/angular/angular/issues/11580
     */
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      helpers.root('src'), // location of your src
      {} // your Angular Async Route paths relative to this root directory
    ),

    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new CopyWebpackPlugin([
      { from: 'src/assets/img', to: 'assets/img' },
      { from: 'src/assets/data/mocks', to: 'assets/data/mocks' }
    ]),

    new HtmlWebpackPlugin({
      template: 'src/index.html',
      chunksSortMode: 'dependency',
      inject: 'body'
    }),

    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'defer'
    })
  ]
};
