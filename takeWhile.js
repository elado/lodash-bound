'use strict';

var fn = require('lodash/takeWhile');

module.exports = function takeWhile() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
