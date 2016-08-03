'use strict';

var fn = require('lodash/reverse');

module.exports = function reverse() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
