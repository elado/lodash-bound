'use strict';

var fn = require('lodash/isBoolean');

module.exports = function isBoolean() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
