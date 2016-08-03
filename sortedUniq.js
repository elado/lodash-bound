'use strict';

var fn = require('lodash/sortedUniq');

module.exports = function sortedUniq() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
