'use strict';

var fn = require('lodash/reduce');

module.exports = function reduce() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
