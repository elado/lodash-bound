'use strict';

var fn = require('lodash/curry');

module.exports = function curry() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
