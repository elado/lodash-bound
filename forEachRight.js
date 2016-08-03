'use strict';

var fn = require('lodash/forEachRight');

module.exports = function forEachRight() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
