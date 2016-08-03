'use strict';

var fn = require('lodash/assign');

module.exports = function assign() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
