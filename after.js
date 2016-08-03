'use strict';

var fn = require('lodash/after');

module.exports = function after() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
