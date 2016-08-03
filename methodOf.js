'use strict';

var fn = require('lodash/methodOf');

module.exports = function methodOf() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
