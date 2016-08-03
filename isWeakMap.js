'use strict';

var fn = require('lodash/isWeakMap');

module.exports = function isWeakMap() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
