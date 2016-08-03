'use strict';

var fn = require('lodash/toInteger');

module.exports = function toInteger() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
