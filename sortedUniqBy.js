'use strict';

var fn = require('lodash/sortedUniqBy');

module.exports = function sortedUniqBy() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
