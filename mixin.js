'use strict';

var fn = require('lodash/mixin');

module.exports = function mixin() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
