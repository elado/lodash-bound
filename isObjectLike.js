'use strict';

var fn = require('lodash/isObjectLike');

module.exports = function isObjectLike() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
