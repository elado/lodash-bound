'use strict';

var fn = require('lodash/chain');

module.exports = function chain() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
