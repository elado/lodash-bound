'use strict';

var fn = require('lodash/split');

module.exports = function split() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
