'use strict';

var fn = require('lodash/sum');

module.exports = function sum() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
