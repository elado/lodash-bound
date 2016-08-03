'use strict';

var fn = require('lodash/invoke');

module.exports = function invoke() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
