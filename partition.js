'use strict';

var fn = require('lodash/partition');

module.exports = function partition() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
