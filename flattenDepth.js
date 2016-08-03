'use strict';

var fn = require('lodash/flattenDepth');

module.exports = function flattenDepth() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
