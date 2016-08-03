'use strict';

var fn = require('lodash/toLength');

module.exports = function toLength() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
