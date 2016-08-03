'use strict';

var fn = require('lodash/at');

module.exports = function at() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
