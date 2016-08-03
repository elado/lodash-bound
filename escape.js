'use strict';

var fn = require('lodash/escape');

module.exports = function escape() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
