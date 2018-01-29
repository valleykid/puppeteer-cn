'use strict';

const puppeteer = require('puppeteer');
const getChromePath = require('./install');
const launch = puppeteer.launch;

puppeteer.launch = async function (options) {
  const cpath = await getChromePath();
  // console.log(cpath.replace(/(\s+)/g, '\\$1'));
  if (cpath) options = Object.assign({}, { executablePath: cpath }, options);
  return launch.call(puppeteer, options);
}

module.exports = puppeteer;