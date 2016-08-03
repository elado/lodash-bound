'use strict';

var fn = require('lodash/merge');

module.exports = function merge() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
