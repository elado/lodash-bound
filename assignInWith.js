'use strict';

var fn = require('lodash/assignInWith');

module.exports = function assignInWith() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
