'use strict';

var fn = require('lodash/isSafeInteger');

module.exports = function isSafeInteger() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
