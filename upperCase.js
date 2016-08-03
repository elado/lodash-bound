'use strict';

var fn = require('lodash/upperCase');

module.exports = function upperCase() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
