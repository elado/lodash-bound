'use strict';

var fn = require('lodash/isTypedArray');

module.exports = function isTypedArray() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
