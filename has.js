'use strict';

var fn = require('lodash/has');

module.exports = function has() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
