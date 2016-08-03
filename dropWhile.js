'use strict';

var fn = require('lodash/dropWhile');

module.exports = function dropWhile() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
