'use strict';

const isWsl = require('is-wsl');
const shell = require('shelljs');
const semver = require('semver');
const fs = require('fs');
const path = require('path');
const chromeFinder = require('./chrome-finder');
const npm = require('./npm');

function getPlatform() {
  return isWsl ? 'wsl' : process.platform;
}

const supportedPlatforms = ['darwin', 'linux', 'win32', 'wsl'];
const refVersion = getPlatform() === 'win32' ? '60.0.0' : '59.0.0';

async function getChromePath() {
  const pf = getPlatform();
  const errorMsg = 'No Chrome Installations Found';
  if (supportedPlatforms.indexOf(pf) < 0) return; // throw new Error(errorMsg)
  
  const installations = await chromeFinder[pf]();
  if (installations.length === 0) return; // throw new Error(errorMsg)

  const chromePath = installations[0];
  const { stdout } = await shell.exec(`${chromePath.replace(/(\s+)/g, '\\$1')} --version`, { silent: true });
  const version = stdout ? stdout.replace(/[a-z\s\n]/ig, '').replace(/\.\d+$/, '') : '';
  if (semver.gt(version, refVersion)) return chromePath;
}

async function install() {
  const chromePath = await getChromePath();
  let preCommand;
  if (chromePath) {
    preCommand = 'PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true';
  } else {
    preCommand = 'PUPPETEER_DOWNLOAD_HOST=https://npm.taobao.org/mirrors';
  }
  shell.exec(`${preCommand + ' ' + npm} install puppeteer`);
}

if (!fs.existsSync(path.resolve(__dirname, '../node_modules/puppeteer'))) {
  install();
}

module.exports = getChromePath;