'use strict';

var fn = require('lodash/dropRightWhile');

module.exports = function dropRightWhile() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
