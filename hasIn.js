'use strict';

var fn = require('lodash/hasIn');

module.exports = function hasIn() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
