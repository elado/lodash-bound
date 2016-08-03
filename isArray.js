'use strict';

var fn = require('lodash/isArray');

module.exports = function isArray() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
