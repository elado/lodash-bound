'use strict';

var fn = require('lodash/defaults');

module.exports = function defaults() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
