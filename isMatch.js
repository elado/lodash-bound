'use strict';

var fn = require('lodash/isMatch');

module.exports = function isMatch() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
