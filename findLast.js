'use strict';

var fn = require('lodash/findLast');

module.exports = function findLast() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
