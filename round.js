'use strict';

var fn = require('lodash/round');

module.exports = function round() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
