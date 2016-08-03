'use strict';

var fn = require('lodash/fromPairs');

module.exports = function fromPairs() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
