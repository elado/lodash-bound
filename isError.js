'use strict';

var fn = require('lodash/isError');

module.exports = function isError() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
