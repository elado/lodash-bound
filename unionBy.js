'use strict';

var fn = require('lodash/unionBy');

module.exports = function unionBy() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
