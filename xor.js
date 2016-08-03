'use strict';

var fn = require('lodash/xor');

module.exports = function xor() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
