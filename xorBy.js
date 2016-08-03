'use strict';

var fn = require('lodash/xorBy');

module.exports = function xorBy() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
