'use strict';

var fn = require('lodash/size');

module.exports = function size() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
