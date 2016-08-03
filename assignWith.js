'use strict';

var fn = require('lodash/assignWith');

module.exports = function assignWith() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
