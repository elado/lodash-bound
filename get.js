'use strict';

var fn = require('lodash/get');

module.exports = function get() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
