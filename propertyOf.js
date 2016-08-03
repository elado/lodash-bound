'use strict';

var fn = require('lodash/propertyOf');

module.exports = function propertyOf() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
