'use strict';

var fn = require('lodash/sortedLastIndex');

module.exports = function sortedLastIndex() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
