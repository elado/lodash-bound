'use strict';

var fn = require('lodash/sample');

module.exports = function sample() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
