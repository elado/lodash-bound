'use strict';

var fn = require('lodash/assignIn');

module.exports = function assignIn() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
