'use strict';

var fn = require('lodash/orderBy');

module.exports = function orderBy() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
