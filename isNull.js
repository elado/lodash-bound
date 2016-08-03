'use strict';

var fn = require('lodash/isNull');

module.exports = function isNull() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
