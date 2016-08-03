'use strict';

var fn = require('lodash/divide');

module.exports = function divide() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
