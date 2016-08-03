'use strict';

var fn = require('lodash/invert');

module.exports = function invert() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
