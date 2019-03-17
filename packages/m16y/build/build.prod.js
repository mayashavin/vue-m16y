/* eslint-disable*/
'use strict'

require('../../../../build/check-versions')()

process.env.NODE_ENV = 'production'

const ora = require('ora');
const rm = require('rimraf');
const path = require('path');
const chalk = require('chalk');
const webpack = require('webpack');
const config = require('../../../../config');
const webpackConfig = require('./webpack.config');

const spinner = ora('🛠️ Building for production...');
spinner.start();

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), (err) => {
  if (err) throw err;
  webpack(webpackConfig, (error, stats) => {
    spinner.stop();
    if (error) throw error;
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false,
    }) + '\n\n');

    console.log(chalk.cyan('🌟 Build plugin complete.\n'));
    console.log(chalk.yellow(
      '  💁‍♂️ Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ));
  });
});
