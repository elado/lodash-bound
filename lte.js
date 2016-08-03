'use strict';

var fn = require('lodash/lte');

module.exports = function lte() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
