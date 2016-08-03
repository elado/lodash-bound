'use strict';

var fn = require('lodash/eachRight');

module.exports = function eachRight() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
