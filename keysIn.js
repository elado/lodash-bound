'use strict';

var fn = require('lodash/keysIn');

module.exports = function keysIn() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
