'use strict';

var fn = require('lodash/sortedIndexOf');

module.exports = function sortedIndexOf() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
