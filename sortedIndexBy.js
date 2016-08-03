'use strict';

var fn = require('lodash/sortedIndexBy');

module.exports = function sortedIndexBy() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
