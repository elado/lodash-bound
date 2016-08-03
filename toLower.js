'use strict';

var fn = require('lodash/toLower');

module.exports = function toLower() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
