'use strict';

var fn = require('lodash/valuesIn');

module.exports = function valuesIn() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
