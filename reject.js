'use strict';

var fn = require('lodash/reject');

module.exports = function reject() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
