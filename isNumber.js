'use strict';

var fn = require('lodash/isNumber');

module.exports = function isNumber() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
