'use strict';

var fn = require('lodash/countBy');

module.exports = function countBy() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
