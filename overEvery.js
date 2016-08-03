'use strict';

var fn = require('lodash/overEvery');

module.exports = function overEvery() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
