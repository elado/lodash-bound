'use strict';

var fn = require('lodash/lastIndexOf');

module.exports = function lastIndexOf() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
