'use strict';

var fn = require('lodash/toSafeInteger');

module.exports = function toSafeInteger() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
