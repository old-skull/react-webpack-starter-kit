/* eslint-disable @typescript-eslint/no-var-requires */
const CopyPlugin = require('copy-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');
const webpack = require('webpack');
const packageJson = require('./package.json');

module.exports = env => {
  const isDev = env.development;
  const isProd = env.production;

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
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
          exclude: /build/,
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
      new HtmlWebpackPlugin({
        inject: true,
        template: './public/index.html',
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
      new webpack.DefinePlugin({
        'process.env.PRODUCTION': isProd,
        'process.env.NAME': JSON.stringify(packageJson.name),
        'process.env.VERSION': JSON.stringify(packageJson.version),
      }),
      new ForkTsCheckerWebpackPlugin({
        eslint: {
          files: './src/**/*.{ts,tsx,js,jsx}',
        },
      }),
      new CopyPlugin({
        patterns: [{ from: './public/robots.txt' }, { from: './public/favicon.svg' }],
      }),
    ],
  };
};
