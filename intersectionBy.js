'use strict';

var fn = require('lodash/intersectionBy');

module.exports = function intersectionBy() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
