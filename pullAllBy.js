'use strict';

var fn = require('lodash/pullAllBy');

module.exports = function pullAllBy() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
