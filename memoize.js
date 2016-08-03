'use strict';

var fn = require('lodash/memoize');

module.exports = function memoize() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
