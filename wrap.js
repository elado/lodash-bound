'use strict';

var fn = require('lodash/wrap');

module.exports = function wrap() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
