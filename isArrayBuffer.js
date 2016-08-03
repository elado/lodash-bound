'use strict';

var fn = require('lodash/isArrayBuffer');

module.exports = function isArrayBuffer() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
