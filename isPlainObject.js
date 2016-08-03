'use strict';

var fn = require('lodash/isPlainObject');

module.exports = function isPlainObject() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
