'use strict';

var fn = require('lodash/negate');

module.exports = function negate() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
