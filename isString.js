'use strict';

var fn = require('lodash/isString');

module.exports = function isString() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
