'use strict';

var fn = require('lodash/isArrayLike');

module.exports = function isArrayLike() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
