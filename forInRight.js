'use strict';

var fn = require('lodash/forInRight');

module.exports = function forInRight() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
