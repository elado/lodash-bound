'use strict';

var fn = require('lodash/defer');

module.exports = function defer() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
