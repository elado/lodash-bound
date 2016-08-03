'use strict';

var fn = require('lodash/differenceBy');

module.exports = function differenceBy() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
