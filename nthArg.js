'use strict';

var fn = require('lodash/nthArg');

module.exports = function nthArg() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
