'use strict';

const which = require('which');
const npms = ['tnpm', 'cnpm', 'npm'];

function findNpm() {
  for (const i = 0; i < npms.length; i++) {
    try {
      which.sync(npms[i]);
      return npms[i];
    } catch (e) {
      // error
    }
  }
  throw new Error('please install npm');
}

module.exports = findNpm();