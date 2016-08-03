'use strict';

var fn = require('lodash/functions');

module.exports = function functions() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
