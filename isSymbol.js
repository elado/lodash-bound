'use strict';

var fn = require('lodash/isSymbol');

module.exports = function isSymbol() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
