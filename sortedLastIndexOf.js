'use strict';

var fn = require('lodash/sortedLastIndexOf');

module.exports = function sortedLastIndexOf() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
