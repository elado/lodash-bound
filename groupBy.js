'use strict';

var fn = require('lodash/groupBy');

module.exports = function groupBy() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
