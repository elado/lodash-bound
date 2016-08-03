'use strict';

var fn = require('lodash/isArguments');

module.exports = function isArguments() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
