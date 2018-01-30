'use strict';

const shell = require('shelljs');
const npms = ['tnpm', 'cnpm', 'npm'];

function findNpm() {
  for (const i = 0; i < npms.length; i++) {
    if (shell.which(npms[i])) {
      // console.log(npms[i]);
      return npms[i];
    }
  }
  throw new Error('please install npm');
}

module.exports = findNpm();