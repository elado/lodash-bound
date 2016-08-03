'use strict';

var fn = require('lodash/maxBy');

module.exports = function maxBy() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
