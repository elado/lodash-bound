'use strict';

var fn = require('lodash/toUpper');

module.exports = function toUpper() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
