/* eslint-disable*/
const merge = require('webpack-merge');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');


const commonConfig = {
  output: {
    path: path.join(__dirname, '../dist/plugins/'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, '../src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-object-rest-spread']
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader'
        }
      },
      {
        test: /\.css$/,
        use: {
          loader: 'style!less!css',
        }
      },
    ],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true, // Must be set to true if using source-maps in production
      }),
    ]
  }
};

module.exports = [
  merge(commonConfig, {
    entry: path.join(__dirname, '../src/index.js'),
    output: {
      filename: 'vue-m16y-plugin',
      libraryTarget: 'window',
      library: 'M16yPlugin',
    },
  }),
  merge(commonConfig, {
    entry: path.join(__dirname, '../src/index.js'),
    output: {
      filename: 'vue-m16y-plugin',
      libraryTarget: 'umd',
      library: 'vue-m16y-plugin',
      umdNamedDefine: true,
    }
  }),
];