'use strict';

var fn = require('lodash/values');

module.exports = function values() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
