'use strict';

var fn = require('lodash/isEqual');

module.exports = function isEqual() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
