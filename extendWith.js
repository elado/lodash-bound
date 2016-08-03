'use strict';

var fn = require('lodash/extendWith');

module.exports = function extendWith() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
