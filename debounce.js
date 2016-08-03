'use strict';

var fn = require('lodash/debounce');

module.exports = function debounce() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
