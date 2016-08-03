'use strict';

var fn = require('lodash/concat');

module.exports = function concat() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
