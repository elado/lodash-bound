'use strict';

var fn = require('lodash/create');

module.exports = function create() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
