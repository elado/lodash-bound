'use strict';

var fn = require('lodash/zipWith');

module.exports = function zipWith() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
