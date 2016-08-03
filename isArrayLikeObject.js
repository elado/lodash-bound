'use strict';

var fn = require('lodash/isArrayLikeObject');

module.exports = function isArrayLikeObject() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
