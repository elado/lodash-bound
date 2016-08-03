'use strict';

var fn = require('lodash/isNaN');

module.exports = function isNaN() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
