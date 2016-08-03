'use strict';

var fn = require('lodash/once');

module.exports = function once() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
