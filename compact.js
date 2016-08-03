'use strict';

var fn = require('lodash/compact');

module.exports = function compact() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
