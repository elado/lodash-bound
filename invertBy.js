'use strict';

var fn = require('lodash/invertBy');

module.exports = function invertBy() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
