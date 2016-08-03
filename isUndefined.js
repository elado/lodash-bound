'use strict';

var fn = require('lodash/isUndefined');

module.exports = function isUndefined() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
