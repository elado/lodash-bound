'use strict';

var fn = require('lodash/isObject');

module.exports = function isObject() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
