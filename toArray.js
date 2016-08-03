'use strict';

var fn = require('lodash/toArray');

module.exports = function toArray() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
