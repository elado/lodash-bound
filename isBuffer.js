'use strict';

var fn = require('lodash/isBuffer');

module.exports = function isBuffer() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
