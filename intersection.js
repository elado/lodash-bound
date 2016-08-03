'use strict';

var fn = require('lodash/intersection');

module.exports = function intersection() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
