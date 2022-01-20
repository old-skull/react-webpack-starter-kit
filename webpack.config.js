/* eslint-disable @typescript-eslint/no-var-requires */
const CopyPlugin = require('copy-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');
const { DefinePlugin } = require('webpack');
const packageJson = require('./package.json');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const PreactRefreshPlugin = require('@prefresh/webpack');
const { HotModuleReplacementPlugin } = require('webpack');

module.exports = env => {
  const isDev = env.development;
  const isProd = env.production;
  const isAnalyze = env.analyze;

  return {
    entry: './src/index.tsx',
    devtool: isProd ? false : isDev && 'eval-source-map',
    resolve: {
      extensions: ['.ts', '.tsx', '.js', 'jsx'],
      plugins: [new TsconfigPathsPlugin()],
      alias: {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat', // Must be below test-utils
        'react/jsx-runtime': 'preact/jsx-runtime',
      },
    },
    output: {
      path: path.join(__dirname, '/build'),
      filename: '[name].[contenthash].js',
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: {
            // https://swc.rs/docs/configuration/swcrc
            // configure via .swcrc
            loader: 'swc-loader',
          },
        },
        {
          test: /\.s[ac]ss$/i,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
    devServer: {
      historyApiFallback: true,
      open: false,
      client: {
        logging: 'error',
      },
    },
    performance: {
      // https://github.com/webpack/webpack/issues/3486
      // enable/disable/change if you want
      maxEntrypointSize: 1000000,
      maxAssetSize: 1000000,
    },
    stats: {
      hash: true,
      timings: true,
      builtAt: true,
      chunks: true,
      version: false,
      cached: false,
      assets: false,
      children: false,
      chunkModules: false,
      modules: false,
      entrypoints: false,
      cachedModules: false,
      cachedAssets: false,
    },
    optimization: {
      moduleIds: 'deterministic',
      runtimeChunk: 'single',
      concatenateModules: true,
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
      minimize: isProd,
      minimizer: [
        new TerserPlugin({
          parallel: true,
          extractComments: false,
          terserOptions: {
            format: {
              comments: false,
            },
          },
        }),
      ],
    },
    plugins: [
      isDev && new HotModuleReplacementPlugin(),
      isDev && new PreactRefreshPlugin(),
      new BundleAnalyzerPlugin({
        analyzerMode: isAnalyze ? 'server' : 'disabled',
        defaultSizes: 'gzip',
      }),
      new HtmlWebpackPlugin({
        inject: true,
        template: './public/index.html',
        cache: true,
        minify: isProd
          ? {
              removeComments: true,
              collapseWhitespace: true,
              removeRedundantAttributes: true,
              useShortDoctype: true,
              removeEmptyAttributes: true,
              removeStyleLinkTypeAttributes: true,
              keepClosingSlash: true,
              minifyJS: true,
              minifyCSS: true,
              minifyURLs: true,
            }
          : false,
      }),
      new DefinePlugin({
        'process.env.PRODUCTION': isProd,
        'process.env.NAME': JSON.stringify(packageJson.name),
        'process.env.VERSION': JSON.stringify(packageJson.version),
      }),
      new ForkTsCheckerWebpackPlugin(),
      new CopyPlugin({
        patterns: [{ from: './public/robots.txt' }, { from: './public/favicon.svg' }],
      }),
    ].filter(Boolean),
  };
};
