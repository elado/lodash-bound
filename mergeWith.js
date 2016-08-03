'use strict';

var fn = require('lodash/mergeWith');

module.exports = function mergeWith() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
