'use strict';

var fn = require('lodash/takeRightWhile');

module.exports = function takeRightWhile() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
