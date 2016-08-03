'use strict';

var fn = require('lodash/fill');

module.exports = function fill() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
