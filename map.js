'use strict';

var fn = require('lodash/map');

module.exports = function map() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
