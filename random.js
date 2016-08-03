'use strict';

var fn = require('lodash/random');

module.exports = function random() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
