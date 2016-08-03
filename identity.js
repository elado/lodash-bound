'use strict';

var fn = require('lodash/identity');

module.exports = function identity() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
