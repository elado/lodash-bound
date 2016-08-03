'use strict';

var fn = require('lodash/sortedIndex');

module.exports = function sortedIndex() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
