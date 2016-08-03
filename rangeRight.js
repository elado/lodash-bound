'use strict';

var fn = require('lodash/rangeRight');

module.exports = function rangeRight() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
