'use strict';

var fn = require('lodash/sortedLastIndexBy');

module.exports = function sortedLastIndexBy() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
