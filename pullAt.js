'use strict';

var fn = require('lodash/pullAt');

module.exports = function pullAt() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
