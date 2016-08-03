'use strict';

var fn = require('lodash/each');

module.exports = function each() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
