'use strict';

var fn = require('lodash/intersectionWith');

module.exports = function intersectionWith() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
