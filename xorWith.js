'use strict';

var fn = require('lodash/xorWith');

module.exports = function xorWith() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
