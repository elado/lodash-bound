'use strict';

var fn = require('lodash/sortBy');

module.exports = function sortBy() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
