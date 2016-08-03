'use strict';

var fn = require('lodash/isWeakSet');

module.exports = function isWeakSet() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
