'use strict';

var fn = require('lodash/partialRight');

module.exports = function partialRight() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
