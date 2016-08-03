'use strict';

var fn = require('lodash/isFunction');

module.exports = function isFunction() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
