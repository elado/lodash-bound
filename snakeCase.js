'use strict';

var fn = require('lodash/snakeCase');

module.exports = function snakeCase() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
