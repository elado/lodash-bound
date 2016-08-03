'use strict';

var fn = require('lodash/unary');

module.exports = function unary() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
