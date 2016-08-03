'use strict';

var fn = require('lodash/filter');

module.exports = function filter() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
