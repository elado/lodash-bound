'use strict';

var fn = require('lodash/difference');

module.exports = function difference() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
