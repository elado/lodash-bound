'use strict';

var fn = require('lodash/pullAllWith');

module.exports = function pullAllWith() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
