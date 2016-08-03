'use strict';

var fn = require('lodash/take');

module.exports = function take() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
