'use strict';

var fn = require('lodash/isEmpty');

module.exports = function isEmpty() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
