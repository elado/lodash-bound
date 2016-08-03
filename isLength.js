'use strict';

var fn = require('lodash/isLength');

module.exports = function isLength() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
