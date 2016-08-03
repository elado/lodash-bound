'use strict';

var fn = require('lodash/throttle');

module.exports = function throttle() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
