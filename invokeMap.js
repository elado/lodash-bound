'use strict';

var fn = require('lodash/invokeMap');

module.exports = function invokeMap() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
