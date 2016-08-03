'use strict';

var fn = require('lodash/functionsIn');

module.exports = function functionsIn() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
