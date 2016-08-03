'use strict';

var fn = require('lodash/toPairsIn');

module.exports = function toPairsIn() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
