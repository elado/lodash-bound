'use strict';

var fn = require('lodash/isEqualWith');

module.exports = function isEqualWith() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
