'use strict';

var fn = require('lodash/isInteger');

module.exports = function isInteger() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
