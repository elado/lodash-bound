'use strict';

var fn = require('lodash/cloneWith');

module.exports = function cloneWith() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
