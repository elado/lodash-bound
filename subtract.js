'use strict';

var fn = require('lodash/subtract');

module.exports = function subtract() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
