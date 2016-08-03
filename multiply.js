'use strict';

var fn = require('lodash/multiply');

module.exports = function multiply() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
