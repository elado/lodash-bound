'use strict';

var fn = require('lodash/clone');

module.exports = function clone() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
