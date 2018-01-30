'use strict';

const puppeteer = require('puppeteer');
const getChromePath = require('./install');
const launch = puppeteer.launch;

puppeteer.launch = function (options) {
  return new Promise((resolve, reject) => {
    getChromePath().then(cpath => {
      // console.log(cpath.replace(/(\s+)/g, '\\$1'));
      if (cpath) options = Object.assign({}, { executablePath: cpath }, options);
      resolve(launch(options));
    })
    .catch(() => resolve(launch(options)));
  });
}

module.exports = puppeteer;