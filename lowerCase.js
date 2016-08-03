'use strict';

var fn = require('lodash/lowerCase');

module.exports = function lowerCase() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
