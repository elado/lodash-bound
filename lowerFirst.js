'use strict';

var fn = require('lodash/lowerFirst');

module.exports = function lowerFirst() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
