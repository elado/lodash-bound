'use strict';

var fn = require('lodash/isNative');

module.exports = function isNative() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
