'use strict';

var fn = require('lodash/defaultTo');

module.exports = function defaultTo() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
