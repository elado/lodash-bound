'use strict';

var fn = require('lodash/isNil');

module.exports = function isNil() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
