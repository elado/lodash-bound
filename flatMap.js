'use strict';

var fn = require('lodash/flatMap');

module.exports = function flatMap() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
