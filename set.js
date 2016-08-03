'use strict';

var fn = require('lodash/set');

module.exports = function set() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
