'use strict';

var fn = require('lodash/isDate');

module.exports = function isDate() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
