'use strict';

const puppeteer = require('puppeteer');
const utils = require('./install');

const launch = puppeteer.launch;
const isLinux = utils.getPlatform === 'linux';

puppeteer.launch = function (options) {
  if (isLinux) {
    options = Object.assign({}, {
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    }, options);
  }

  return new Promise((resolve, reject) => {
    utils.getChromePath().then(cpath => {
      // console.log(cpath.replace(/(\s+)/g, '\\$1'));
      if (cpath) options = Object.assign({}, { executablePath: cpath }, options);
      resolve(launch(options));
    })
    .catch(() => resolve(launch(options)));
  });
}

module.exports = puppeteer;