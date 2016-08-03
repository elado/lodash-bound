'use strict';

var fn = require('lodash/first');

module.exports = function first() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
