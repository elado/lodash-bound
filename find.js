'use strict';

var fn = require('lodash/find');

module.exports = function find() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
