'use strict';

var fn = require('lodash/slice');

module.exports = function slice() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
