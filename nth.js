'use strict';

var fn = require('lodash/nth');

module.exports = function nth() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
