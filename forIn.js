'use strict';

var fn = require('lodash/forIn');

module.exports = function forIn() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
